import { Component, ReactNode } from 'react';
import './styled.css';
import Cards from '../Cards/Cards';
import { IPeople } from '../../models/interface';

type Props = {
  data: IPeople[];
  loader: boolean;
};

class Show extends Component<Props> {
  render(): ReactNode {
    return (
      <div className="show_container">
        <Cards data={this.props.data} loader={this.props.loader} />
      </div>
    );
  }
}

export default Show;
