import { useEffect, useRef, useState } from 'react';
import { IPerson } from '../models/interface';
import { getPeopleData } from '../api/data';

export interface IHookPeople {
  request: string;
  currentPage: number;
  limit: number;
}

type Props = {
  data: IHookPeople;
};

function usePeople({ data }: Props) {
  const [loader, setLoader] = useState<boolean>(false);
  const [apiData, setApiData] = useState<IPerson[]>([]);
  const maxResult = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const getPeople = async (search: string, page: number) => {
      setLoader(true);
      localStorage.setItem('request', data.request);
      try {
        const { count, results } = await getPeopleData(
          search,
          page,
          data.limit,
          {
            signal,
          }
        );
        maxResult.current = count;
        setApiData(results);
        setLoader(false);
      } catch (e) {
        console.error('Fetch People ERROR', (e as Error).message);
      }
    };
    getPeople(data.request, data.currentPage);
  }, [data.currentPage, data.limit, data.request]);
  return [loader, apiData, maxResult.current] as const;
}

export default usePeople;
