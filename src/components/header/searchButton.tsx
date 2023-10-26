import React, { Component } from 'react';
import { PokemonData, SearchButtonProps } from '../../interfaces';
import myContext from '../../services/myContext';
import sendQuery from '../../services/sendQuery';
import MyContext from '../../services/myContext';

class SearchButton extends Component<SearchButtonProps> {
  static contextType = myContext;
  declare context: React.ContextType<typeof MyContext>;

  handleSearch = async () => {
    const newState: PokemonData = await sendQuery(this.props.text);
    this.context.updateQuery(newState);
    localStorage.setItem('term', this.props.text);
    console.log(this.context);
  };

  render() {
    return <button onClick={this.handleSearch}>Search</button>;
  }
}

export default SearchButton;
