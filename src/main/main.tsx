import { useState, useEffect } from 'react';
import CardItem from '../CardItem/cardItem';
import Loader from '../loader/loader';
import { ResultItem, SearchResult } from '../models/search.model';
import './main.css';

interface PropsType {
  search: string;
}

interface StateType {
  loading: boolean;
  results: ResultItem[];
}

export default function Main(props: PropsType) {
  const [state, setState] = useState<StateType>({
    loading: false,
    results: [],
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9999')
      .then((response) => response.json())
      .then((response: SearchResult) => {
        const result = response.results
          .filter((v) => v.name.includes(props.search))
          .slice(0, 50);
        setTimeout(() => {
          setState((prevState) => ({ ...prevState, results: result, loading: false }));
        }, 500);
      })
      .catch(() => setState((prevState) => ({ ...prevState, loading: true })));
  }, [props.search]);

  return (
    <>
      {state.loading && <Loader />}
      <main className="main">
        {state.results.map((i) => {
          return <CardItem key={i.name + i.url} item={i} />;
        })}
      </main>
    </>
  );
}
