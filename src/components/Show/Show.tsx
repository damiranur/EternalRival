import { Component, ReactNode } from 'react';
import './styled.css';
import Cards from '../Cards/Cards';
import { IPeople } from '../../models/interface';

type Props = {
  updateData: IPeople[];
};

class Show extends Component<Props> {
  render(): ReactNode {
    return (
      <div className="show_container">
        <Cards updateData={this.props.updateData} />
      </div>
    );
  }
}

export default Show;
