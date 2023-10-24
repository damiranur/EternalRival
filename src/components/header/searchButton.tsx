import { Component } from 'react';
import { SearchButtonProps } from '../../interfaces';

class SearchButton extends Component<SearchButtonProps> {
  search = () => {
    localStorage.setItem('term', this.props.text);
  };
  render() {
    return <button onClick={this.search}>Search</button>;
  }
}

export default SearchButton;
