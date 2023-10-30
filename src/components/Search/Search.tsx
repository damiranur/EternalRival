import { Component, ReactNode } from 'react';
import './styled.css';
import { getData } from '../../api/data';
import { IPeople } from '../../models/interface';

type Props = {
  updateData: ([]: IPeople[]) => void;
  loader: (value: boolean) => void;
};

class Search extends Component<Props> {
  state = {
    value: '',
  };

  getNewData = async (value: string) => {
    this.props.loader(true);
    const new_data = await getData(value);
    try {
      localStorage.setItem('data', JSON.stringify(new_data));
      this.props.updateData(new_data);
      this.props.loader(false);
    } catch (e) {
      console.error('ERROR', e);
    }
  };

  render(): ReactNode {
    return (
      <div className="search_container">
        <form>
          <input
            className="input form-control me-sm-2"
            placeholder="Search"
            type="text"
            onChange={(event) => {
              this.setState({
                value: event.target.value,
              });
            }}
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.getNewData(this.state.value)}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
