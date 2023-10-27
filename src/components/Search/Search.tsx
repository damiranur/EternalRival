import { Component, ReactNode } from 'react';
import './styled.css';

class Search extends Component {
  render(): ReactNode {
    return (
      <div className="search_container">
        <form>
          <input className="input" type="text" />
          <button className="btn">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
