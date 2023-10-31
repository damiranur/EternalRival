import { CharacterData } from '../interfaces';
import getCharacters from './getCharacters';
import React from 'react';

const handleSearch = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setCharactersData: React.Dispatch<
    React.SetStateAction<CharacterData[] | null>
  >,
  text: string
) => {
  setIsLoading(true);
  const newState: CharacterData[] = await getCharacters(text);
  setIsLoading(false);
  setCharactersData(newState);
  localStorage.setItem('term', text);
};

export default handleSearch;
