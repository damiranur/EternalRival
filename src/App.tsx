import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/body/main';
import MyContext from './services/myContext';
import { PokemonData } from './interfaces';

class App extends Component {
  updateQuery = (pokemonData: PokemonData) => {
    if (pokemonData.effect_entries[1]) {
      console.log(pokemonData.name, pokemonData.effect_entries[1].effect);
    }
    this.setState({
      query: {
        name: pokemonData.name,
        description: pokemonData.effect_entries[1].effect,
      },
      updateQuery: this.updateQuery,
    });
  };

  state = {
    query: {
      name: '',
      description: '',
    },
    updateQuery: this.updateQuery,
  };

  render() {
    console.log('in app', this.state);
    return (
      <MyContext.Provider
        value={{ query: this.state.query, updateQuery: this.state.updateQuery }}
      >
        <>
          <Header />
          <Main />
        </>
      </MyContext.Provider>
    );
  }
}

export default App;
