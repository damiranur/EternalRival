import React from 'react';
import Header from './header/header';
import Main from './main/main';
import { ResultItem, SearchResult } from './models/search.model';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

interface propsType {
  defaultValue: string;
  search: string;
  result: ResultItem[];
}

export default class App extends React.Component<null, propsType> {
  constructor(props: null) {
    super(props);
    const valueStorage = (localStorage.getItem('lastSearch') as string) || '';
    this.state = {
      defaultValue: valueStorage,
      search: valueStorage,
      result: [],
    };

    this.changeSearchEvent = this.changeSearchEvent.bind(this);
    this.clickSearchHandler = this.clickSearchHandler.bind(this);
  }

  componentDidMount() {
    this.clickSearchHandler();
  }

  changeSearchEvent(value: string) {
    this.setState({ ...this.state, search: value });
    localStorage.setItem('lastSearch', value);
  }

  clickSearchHandler() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9999')
      .then((response) => response.json())
      .then((response: SearchResult) => {
        const result = response.results
          .filter((v) => v.name.includes(this.state.search))
          .slice(0, 50);
        this.setState({ ...this.state, result: result });
      });
  }

  render() {
    return (
      <ErrorBoundary>
        <Header
          defaultValue={this.state.defaultValue}
          changeSearchEvent={this.changeSearchEvent}
          clickSearchEvent={this.clickSearchHandler}
        />
        <Main list={this.state.result} />
      </ErrorBoundary>
    );
  }
}
