import React, { useContext } from 'react';
import CharacterCard from './characterCard';
import MyContext from '../../services/myContext';
import { CharacterData } from '../../interfaces';

function MainSection() {
  const { charactersData, isLoading } = useContext(MyContext);
  const isCardsExist = charactersData!.length !== 0;

  let content;
  if (isLoading) {
    content = <img src="/src/assets/loading.gif" alt="loader"></img>;
  } else if (isCardsExist) {
    content = charactersData!.map((character: CharacterData, index: number) => (
      <CharacterCard key={index} data={character} />
    ));
  } else {
    content = <h1>Oops! Character does not found</h1>;
  }

  return <main>{content}</main>;
}

export default MainSection;
