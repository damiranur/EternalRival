import { Component, ReactNode } from 'react';
import './styled.css';

class Search extends Component {
  render(): ReactNode {
    return (
      <div className="search_container">
        <form>
          <input className="input" type="text" />
        </form>
        <button className="btn">Search</button>
      </div>
    );
  }
}

export default Search;
