import { Component, ReactNode } from 'react';
import './styled.css';
import { getData } from '../../api/data';
import { IPeople } from '../../models/interface';

type Props = {
  updateData: ([]: IPeople[]) => void;
};

class Search extends Component<Props> {
  state = {
    value: '',
  };

  getNewData = async (value: string) => {
    const new_data = await getData(value);
    try {
      this.props.updateData(new_data);
    } catch (e) {
      console.error('ERROR', e);
    }
  };

  changeValue = (item: string) => {
    this.setState({
      value: item,
    });
  };

  render(): ReactNode {
    return (
      <div className="search_container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.getNewData(this.state.value);
          }}
        >
          <input
            className="input"
            type="text"
            onChange={(event) => {
              this.changeValue(event.target.value);
            }}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
