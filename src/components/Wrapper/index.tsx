import { Component } from 'react';
import { IChildrenProps } from '../../types';
import styles from './Wrapper.module.scss';

class Wrapper extends Component<IChildrenProps> {
  render() {
    const { children } = this.props;
    return <div className={styles.wrapper}>{children}</div>;
  }
}

export default Wrapper;
