import React from 'react';
import { DataState } from '../interfaces';

const MyContext = React.createContext<DataState>({
  productsData: [],
  setCharactersData: () => {},
  setIsLoading: () => {},
  isLoading: false,
});

export default MyContext;
