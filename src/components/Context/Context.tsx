import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { IData, IPerson } from '../../models/interface';

interface IContext {
  data: IData<IPerson[]> | null;
  setData: Dispatch<SetStateAction<IData<IPerson[]> | null>>;
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

export const DataContext = createContext<IContext>({
  data: null,
  setData: () => undefined,
  loader: false,
  setLoader: () => undefined,
});

export const Context = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData<IPerson[]> | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const value = {
    data,
    setData,
    loader,
    setLoader,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
