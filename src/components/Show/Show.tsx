import { Component, ReactNode } from 'react';
import './styled.css';
import Cards from '../Cards/Cards';

class Show extends Component {
  render(): ReactNode {
    return (
      <div className="show_container">
        <Cards />
      </div>
    );
  }
}

export default Show;
