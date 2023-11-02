import React from 'react';
import { DataState } from '../interfaces';

const MyContext = React.createContext<DataState>({
  productsData: [],
  setProductsData: () => {},
  setIsLoading: () => {},
  isLoading: false,
  totalProducts: 0,
  inputValue: '',
  limit: 0,
  setInputValue: () => {},
  setLimit: () => {},
  totalPages: 0,
  setTotalProducts: () => {},
  page: '1',
  setPage: () => {},
});

export default MyContext;
