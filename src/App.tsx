import { Component, ReactNode } from 'react';
import Search from './components/Search/Search';
import Show from './components/Show/Show';
import { IPeople } from './models/interface';

interface IUpdateData {
  updateData: IPeople[];
}

class App extends Component<IUpdateData> {
  state: IUpdateData = {
    updateData: [],
  };

  /* async componentDidMount(): Promise<void> {
    this.setState({ loader: true });
    const response_data = await getData(1);
    try {
      this.setState({ data: response_data });
      this.setState({ loader: false });
      console.log('did mount');
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  } */

  updateData = (newData: IPeople[]) => {
    this.setState({ updateData: newData });
  };

  render(): ReactNode {
    const { updateData } = this.state;
    return (
      <>
        <div className="container">
          <Search updateData={this.updateData} />
          <Show updateData={updateData} />
        </div>
      </>
    );
  }
}

export default App;
