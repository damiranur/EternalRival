import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
const localStorRequest = localStorage.getItem('request');
export const SearchContext = createContext<string>('');
export const SearchSetContext = createContext<Dispatch<
  SetStateAction<string>
> | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState(localStorRequest || '');
  return (
    <SearchContext.Provider value={request}>
      <SearchSetContext.Provider value={setRequest}>
        {children}
      </SearchSetContext.Provider>
    </SearchContext.Provider>
  );
}
