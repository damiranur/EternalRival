import { Component, ReactNode } from 'react';
import Search from './components/Search/Search';
import Show from './components/Show/Show';
import { IPeople } from './models/interface';
import { getData } from './api/data';

type CardsState = {
  data: IPeople[];
  loader: boolean;
};

class App extends Component<object, CardsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
      loader: false,
    };
  }

  updateData = (newData: IPeople[]) => {
    this.setState({ data: newData });
  };

  async componentDidMount(): Promise<void> {
    this.setState({ loader: true });
    const response_data = await getData(1);
    try {
      this.setState({ data: response_data });
      this.setState({ loader: false });
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  }

  componentDidUpdate() {
    this.state;
  }

  render(): ReactNode {
    const { data } = this.state;
    const { loader } = this.state;
    return (
      <>
        <div className="container">
          <Search updateData={this.updateData} />
          <Show data={data} loader={loader} />
        </div>
      </>
    );
  }
}

export default App;
