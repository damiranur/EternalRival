import { useState } from 'react';
import Header from './header/header';
import Main from './main/main';

interface StateType {
  defaultValue: string;
  search: string;
}

export default function App() {
  const valueStorage = (localStorage.getItem('lastSearch') as string) || '';
  const [state, setState] = useState<StateType>({
    defaultValue: valueStorage,
    search: valueStorage,
  });

  const changeSearchEvent = (value: string) => {
    setState((prevState) => ({ ...prevState, search: value }));
    localStorage.setItem('lastSearch', value);
  }

  return (
    <>
      <Header
        defaultValue={state.defaultValue}
        searchItem={changeSearchEvent}
      />
      <Main search={state.search} />
    </>
  );
}
