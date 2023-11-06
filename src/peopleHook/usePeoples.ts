import { useEffect, useRef, useState } from 'react';
import { IPerson } from '../models/interface';
import { getData } from '../api/data';

export interface IHookPeople {
  request: string;
  currentPage: number;
  limit: number;
}

type Props = {
  data: IHookPeople;
};

function usePeoples({ data }: Props) {
  const [loader, setLoader] = useState<boolean>(false);
  const [apiData, setApiData] = useState<IPerson[]>([]);
  const maxResult = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const getPeoples = async (search: string, page: number) => {
      setLoader(true);
      localStorage.setItem('request', data.request);
      try {
        const { count, results } = await getData(search, page, data.limit, {
          signal,
        });
        maxResult.current = count;
        setApiData(results);
        setLoader(false);
      } catch (e) {
        console.error('Fetch ERROR', (e as Error).message);
      }
    };
    getPeoples(data.request, data.currentPage);
  }, [data.currentPage, data.limit, data.request]);
  return [loader, apiData, maxResult.current] as const;
}

export default usePeoples;
