import { Component, ReactNode } from 'react';
import Search from './components/Search/Search';
import Show from './components/Show/Show';
import { IData, IPeople } from './models/interface';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { getData } from './api/data';

class App extends Component {
  state: IData = {
    data: [],
    loader: false,
  };

  async componentDidMount(): Promise<void> {
    this.setState({ loader: true });
    const checkData = localStorage.getItem('data');
    if (checkData) {
      const data = JSON.parse(checkData);
      setTimeout(() => this.setState({ data: data, loader: false }), 1000);
      return;
    }
    const get_data = await getData(1);
    try {
      this.setState({ data: get_data });
      this.setState({ loader: false });
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  }

  updateData = (newData: IPeople[]) => {
    this.setState({ data: newData });
  };

  render(): ReactNode {
    return (
      <div className="container">
        <Search
          updateData={this.updateData}
          loader={(value) => this.setState({ loader: value })}
        />
        <ErrorButton />
        <Show data={this.state} />
      </div>
    );
  }
}

export default App;
