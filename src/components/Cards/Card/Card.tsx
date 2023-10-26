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
        <p>{this.props.people.name}</p>
        <p>{this.props.people.height}</p>
        <p>{this.props.people.mass}</p>
        <p>{this.props.people.hair_color}</p>
        <p>{this.props.people.skin_color}</p>
      </div>
    );
  }
}

export default People;
