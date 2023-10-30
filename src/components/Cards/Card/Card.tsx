import { Component, ReactNode } from 'react';
import './styled.css';
import { IPeople } from '../../../models/interface';

type Props = {
  people: IPeople;
};

class People extends Component<Props> {
  render(): ReactNode {
    return (
      <div className="people_wrapper alert alert-dismissible alert-info">
        <p>
          <strong> {this.props.people.name}</strong>
        </p>
        <p>Height: {this.props.people.height} cm</p>
        <p>Mass: {this.props.people.mass} kg</p>
      </div>
    );
  }
}

export default People;
