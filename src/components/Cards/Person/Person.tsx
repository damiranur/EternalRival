// import { Component, ReactNode } from 'react';
import './styled.css';
import { IPerson } from '../../../models/interface';

type Props = {
  data: IPerson;
};

function Person({ data }: Props) {
  return (
    <div className="people_wrapper alert alert-dismissible alert-info">
      <p>
        <strong> {data.name}</strong>
      </p>
      <p>Height: {data.height} cm</p>
      <p>Mass: {data.mass} kg</p>
    </div>
  );
}

export default Person;
