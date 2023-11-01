// import { Component, ReactNode } from 'react';
import './styled.css';
import Cards from '../Cards/Cards';
import { IPerson } from '../../models/interface';

type Props = {
  data: IPerson[];
  loader: boolean;
};

function Show({ data, loader }: Props) {
  return (
    <div className="show_container alert alert-dismissible alert-warning">
      <Cards data={data} loader={loader} />
    </div>
  );
}

export default Show;
