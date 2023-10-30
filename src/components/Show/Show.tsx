import { Component, ReactNode } from 'react';
import './styled.css';
import Cards from '../Cards/Cards';
import { IData } from '../../models/interface';

type Props = {
  data: IData;
};

class Show extends Component<Props> {
  render(): ReactNode {
    return (
      <div className="show_container alert alert-dismissible alert-warning">
        <Cards data={this.props.data} />
      </div>
    );
  }
}

export default Show;
