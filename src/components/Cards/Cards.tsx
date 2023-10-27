import { Component, ReactNode } from 'react';
import './styled.css';
import People from './Card/Card';
import { IPeople } from '../../models/interface';

type Props = {
  data: IPeople[];
  loader: boolean;
};

class Cards extends Component<Props> {
  render(): ReactNode {
    return (
      <>
        {this.props.loader && <p>Loading...</p>}
        {this.props.data.map((item, i) => (
          <People people={item} key={i} />
        ))}
      </>
    );
  }
}

export default Cards;
