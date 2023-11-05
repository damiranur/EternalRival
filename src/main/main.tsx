import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardItem from "../CardItem/cardItem";
import Loader from "../loader/loader";
import Pagination from "../Pagination/pagination";
import { ResultItem, SearchResult } from "../models/search.model";
import "./main.css";

interface StateType {
  loading: boolean;
  results: ResultItem[];
  itemsCount: number;
}

export default function Main() {
  const location = useLocation();
  const params = useParams();
  const [state, setState] = useState<StateType>({
    loading: false,
    results: [],
    itemsCount: 0,
  });

  const elPerPage = 9;
  const currentPage = Number(new URLSearchParams(location.search).get('page'));
  const countPage = Math.floor(state.itemsCount / elPerPage);
  const search = params.search || "";

  useEffect(() => {
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9999")
      .then((response) => response.json())
      .then((response: SearchResult) => {
        const result = response.results.filter((v) => v.name.includes(search));
        setTimeout(() => {
          setState((prevState) => ({ 
            ...prevState,
            results: result.slice(
              elPerPage * currentPage, 
              elPerPage * (currentPage + 1)
            ),
            itemsCount: result.length,
            loading: false,
          }));
        }, 500);
      })
      .catch(() => setState((prevState) => ({ ...prevState, loading: true })));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search, location.search]);

  return (
    <>
      {state.loading && <Loader />}
      <main className="main">
        {state.results.map((i) => {
          return <CardItem key={i.name + i.url} item={i} />
        })}
        {
          state.results.length !== 0 && (
            <Pagination search={search} countPage={countPage} />
          )
        }
      </main>
    </>
  );
}
