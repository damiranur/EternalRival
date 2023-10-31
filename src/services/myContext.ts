import React from 'react';
import { DataState } from '../interfaces';
import getCharacters from './getCharacters';

const MyContext = React.createContext<DataState>({
  charactersData: await getCharacters(localStorage.getItem('term') || ''),
  setCharactersData: () => {},
  setIsLoading: () => {},
  isLoading: false,
});

export default MyContext;
