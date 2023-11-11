import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { IPerson } from '../models/interface';

export const PeopleContext = createContext<IPerson[]>([]);
export const PeopleSetContext = createContext<Dispatch<
  SetStateAction<IPerson[]>
> | null>(null);

export function PeopleProvider({ children }: { children: ReactNode }) {
  const [people, setPeople] = useState<IPerson[]>([]);

  return (
    <PeopleContext.Provider value={people}>
      <PeopleSetContext.Provider value={setPeople}>
        {children}
      </PeopleSetContext.Provider>
    </PeopleContext.Provider>
  );
}
