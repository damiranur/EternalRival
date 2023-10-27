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

  getNewData = async () => {
    const new_data = await getData(this.state.value);
    try {
      this.props.updateData(new_data);
      console.log(new_data);
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
    console.log(this.state.value);
    return (
      <div className="search_container">
        <form onClick={this.getNewData}>
          <input
            className="input"
            type="text"
            value={this.state.value}
            onChange={(event) => this.changeValue(event?.target.value)}
          />
          <button type="button" className="btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
