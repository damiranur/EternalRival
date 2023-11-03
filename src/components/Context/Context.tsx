import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { IData } from '../../models/interface';

interface IContext {
  data: IData | null;
  setData: Dispatch<SetStateAction<IData | null>>;
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
  const [data, setData] = useState<IData | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const value = {
    data,
    setData,
    loader,
    setLoader,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
