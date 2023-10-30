import { Component, ReactNode } from 'react';
import './styled.css';
import People from './Card/Card';
import { IData } from '../../models/interface';

type Props = {
  data: IData;
};

class Cards extends Component<Props, IData> {
  render(): ReactNode {
    return (
      <>
        {this.props.data.loader ? (
          <p>Loading...</p>
        ) : (
          this.props.data.data.map((item, i) => (
            <People people={item} key={i} />
          ))
        )}
      </>
    );
  }
}

export default Cards;
