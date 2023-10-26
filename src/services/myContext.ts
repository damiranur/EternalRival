import React from 'react';
import { PokemonData } from '../interfaces';

const MyContext = React.createContext<{
  query: {
    name: string;
    description: string;
  };
  updateQuery: (data: PokemonData) => void;
}>({
  query: {
    name: '',
    description: '',
  },
  updateQuery: () => {},
});

export default MyContext;
