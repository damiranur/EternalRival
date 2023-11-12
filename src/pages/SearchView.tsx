
import { useLocation, useParams } from 'react-router-dom';
import { Header, ListView } from '../components';
import { SearchResult } from '../models';
import { SearchContext, SearchContextInitial, SearchContextType } from '../contexts';
import { useEffect, useState } from 'react';

export const SearchView = () => {
  const location = useLocation();
  const params = useParams();

  const count = Number(new URLSearchParams(location.search).get('count')) || 5;
  const currentPage = Number(new URLSearchParams(location.search).get('page')) || 0;
  const detail = Number(new URLSearchParams(location.search).get('detail')) || 0;
  const search = params.search || localStorage.getItem('search') || '';
  const id = Number(params.id) || 0;
  
  const [state, setState] = useState<SearchContextType>({
    ...SearchContextInitial,
    count: count,
    currentPage: currentPage,
    detail: detail,
    search: search,
    id: id,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      search: search,
      currentPage: currentPage,
      count: count,
      id: id,
      detail: detail,
    }));
  }, [search, currentPage, count, id, detail])

  useEffect(() => {
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9999')
      .then((response) => response.json())
      .then((response: SearchResult) => {
        const result = response.results.filter((v) => v.name.includes(search));
        setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            items: result.slice(
              count * currentPage, 
              count * (currentPage + 1)
            ),
            itemsCount: result.length,
            loading: false,
          }));
        }, 500);
      });
  }, [search, currentPage, count]);

  return (
    <SearchContext.Provider value={state}>
      <Header />
      <ListView  />
    </SearchContext.Provider>
  );
}
