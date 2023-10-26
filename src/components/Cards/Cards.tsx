import { Component, ReactNode } from 'react';
import './styled.css';
import People from './Card/Card';
import { getData } from '../../api/data';
import { IPeople } from '../../models/interface';

type CardsState = {
  data: IPeople[];
};

class Cards extends Component<object, CardsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount(): Promise<void> {
    const response_data = await getData(2);
    try {
      this.setState({ data: response_data });
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  }
  render(): ReactNode {
    const { data } = this.state;
    return (
      <>
        {data.map((item, i) => (
          <People people={item} key={i} />
        ))}
      </>
    );
  }
}

export default Cards;
