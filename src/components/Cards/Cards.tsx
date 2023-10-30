import { Component, ReactNode } from 'react';
import './styled.css';
import People from './Card/Card';
import { IPeople } from '../../models/interface';
import { getData } from '../../api/data';

type Props = {
  updateData: IPeople[];
};

interface IData {
  data: IPeople[];
  loader: boolean;
}

class Cards extends Component<Props, IData> {
  state: IData = {
    data: [],
    loader: false,
  };

  handleLoader = (value: boolean) => {
    this.setState({
      loader: value,
    });
  };

  async componentDidMount(): Promise<void> {
    this.handleLoader(true);
    const checkData = localStorage.getItem('data');
    if (checkData?.length) {
      const data = JSON.parse(checkData);
      console.log('Local storage data: ', data);
      setTimeout(() => this.setState({ data: data, loader: false }), 5000);
      return;
    }
    const get_data = await getData(1);
    console.log('First Data: ', get_data);
    try {
      this.setState({ data: get_data });
      this.handleLoader(false);
      console.log('first render');
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const new_data = this.props.updateData;
    const prev_data = prevProps.updateData;
    if (prev_data != new_data) {
      this.setState({ loader: true });
      setTimeout(() => this.setState({ data: new_data, loader: false }), 5000);
      localStorage.setItem('data', JSON.stringify(new_data));
    }
  }

  render(): ReactNode {
    return (
      <>
        {this.state.loader ? (
          <p>Loading...</p>
        ) : (
          this.state.data.map((item, i) => <People people={item} key={i} />)
        )}
      </>
    );
  }
}

export default Cards;
