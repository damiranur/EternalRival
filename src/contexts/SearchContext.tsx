import { createContext } from 'react';
import { ResultItem } from '../models';

export interface SearchContextType {
  items: ResultItem[];
  itemsCount: number;
  id: number;
  count: number;
  detail: number;
  currentPage: number;
  loading: boolean;
  search: string;
}

export const SearchContextInitial = {
  items: [],
  itemsCount: 0,
  id: 0,
  count: 0,
  detail: 0,
  currentPage: 0,
  loading: false,
  search: '',
}

export const SearchContext = createContext<SearchContextType>(SearchContextInitial);
