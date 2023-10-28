import React from 'react';
import Header from './header/header';

interface propsType {
  defaultValue: string;
  search: string;
}

export default class App extends React.Component<null, propsType> {
  constructor(props: null) {
    super(props);
    this.state = {
      defaultValue: localStorage.getItem('lastSearch') as string,
      search: localStorage.getItem('lastSearch') as string,
    };

    this.changeSearchEvent = this.changeSearchEvent.bind(this);
    this.clickSearchHandler = this.clickSearchHandler.bind(this);
  }

  changeSearchEvent(value: string) {
    this.setState({ ...this.state, search: value });
    localStorage.setItem('lastSearch', value);
  }

  clickSearchHandler() {
    console.log(this.state.search);
  }

  render() {
    return (
      <Header
        defaultValue={this.state.defaultValue}
        changeSearchEvent={this.changeSearchEvent}
        clickSearchEvent={this.clickSearchHandler}
      />
    );
  }
}
