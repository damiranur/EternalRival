import React, { useState } from 'react';
import Header from './components/header/header';
import MainSection from './components/body/mainSection';
import { CharacterData, DataState } from './interfaces';
import MyContext from './services/myContext';
import ErrorBoundary from './components/addition/errorBoundary';

function App() {
  const [charactersData, setCharactersData] = useState<CharacterData[] | null>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const state: DataState = {
    charactersData,
    setCharactersData,
    setIsLoading,
    isLoading,
  };

  return (
    <MyContext.Provider value={state}>
      <ErrorBoundary>
        <Header />
        <MainSection />
      </ErrorBoundary>
    </MyContext.Provider>
  );
}

export default App;
