import React, { Component } from 'react';
import myContext from '../../services/myContext';
import MyContext from '../../services/myContext';

class PokemonCard extends Component {
  static contextType = myContext;
  declare context: React.ContextType<typeof MyContext>;
  render() {
    console.log('in render', this.context);
    return (
      <div className={'pokemon-card'}>
        <h2>{this.context.query.name}</h2>
        <p>{this.context.query.description}</p>
      </div>
    );
  }
}

export default PokemonCard;
