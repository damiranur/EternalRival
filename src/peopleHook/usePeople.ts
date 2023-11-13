import { useContext, useEffect, useRef, useState } from 'react';
import { getPeopleData } from '../api/data';
import { PeopleSetContext } from '../Context/peopleContext';

export interface IHookPeople {
  request: string;
  currentPage: number;
  limit: number;
}

type Props = {
  data: IHookPeople;
};

function useSetPeople() {
  const setPeople = useContext(PeopleSetContext);
  if (!setPeople) {
    throw new Error();
  } else {
    return setPeople;
  }
}

function usePeople({ data }: Props) {
  const setPeople = useSetPeople();
  const [loader, setLoader] = useState<boolean>(false);
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
        setPeople(results);
        setLoader(false);
      } catch (e) {
        setLoader(false);
        console.error('Fetch People ERROR', (e as Error).message);
      }
    };
    getPeople(data.request, data.currentPage);
  }, [data.currentPage, data.limit, data.request, setPeople]);
  return [loader, maxResult.current] as const;
}

export default usePeople;
