import { useEffect, useState } from 'react';
import { IPerson } from '../models/interface';
import { getPersonData } from '../api/data';

export interface IHookOnePerson {
  id: number;
}

type Props = {
  propsData: IHookOnePerson;
};

function useOnePerson({ propsData }: Props) {
  const [loader, setLoader] = useState<boolean>(false);
  const [apiData, setApiData] = useState<IPerson>();
  useEffect(() => {
    const getOnePerson = async (id: number) => {
      setLoader(true);
      try {
        const data: IPerson = await getPersonData(id);
        setApiData(data);
        setLoader(false);
      } catch (e) {
        console.error('Fetch OnePerson ERROR', e);
      }
    };
    getOnePerson(propsData.id);
  }, [propsData.id]);
  return [loader, apiData] as const;
}

export default useOnePerson;
