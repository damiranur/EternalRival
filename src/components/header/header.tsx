import { ChangeEvent, Component } from 'react';
import SearchInput from './searchInput';
import SearchButton from './searchButton';
import { HeaderProps } from '../../interfaces';

class Header extends Component<HeaderProps, { inputValue: string }> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('term') || '',
    };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      this.setState({ inputValue: e.target.value });
    }
  };

  render() {
    return (
      <header>
        <SearchInput
          type="text"
          placeholder="Enter the text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <SearchButton text={this.state.inputValue} />
      </header>
    );
  }
}

export default Header;
