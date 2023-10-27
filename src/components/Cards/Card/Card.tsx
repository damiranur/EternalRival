import { Component, ReactNode } from 'react';
import './styled.css';
import { IPeople } from '../../../models/interface';

type Props = {
  people: IPeople;
};

class People extends Component<Props> {
  render(): ReactNode {
    return (
      <div className="people_wrapper">
        <p>
          <strong>{this.props.people.name}</strong>
        </p>
        <p>{this.props.people.height}</p>
        <p>{this.props.people.mass}</p>
      </div>
    );
  }
}

export default People;
