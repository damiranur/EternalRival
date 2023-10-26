import { ChangeEvent } from 'react';

export interface HeaderProps {
  inputValue: string;
}

export interface SearchInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchButtonProps {
  text: string;
}

export interface PokemonData {
  name: string;
  effect_entries: [
    {
      effect: string;
    },
    {
      effect: string;
    },
  ];
}

export interface MyContextInterface {
  query: PokemonData;
  updateQuery: () => void;
}
