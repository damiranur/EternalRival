import { Component, ReactNode } from 'react';
import './styled.css';
import People from './Card/Card';
import { getData } from '../../api/data';
import { IPeople } from '../../models/interface';

type CardsState = {
  data: IPeople[];
  loader: boolean;
};

class Cards extends Component<object, CardsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
      loader: false,
    };
  }
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
  render(): ReactNode {
    const { data } = this.state;
    const { loader } = this.state;
    return (
      <>
        {loader && <p>Loading...</p>}
        {data.map((item, i) => (
          <People people={item} key={i} />
        ))}
      </>
    );
  }
}

export default Cards;
