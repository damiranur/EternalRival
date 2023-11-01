// import { Component, ReactNode } from 'react';
import './styled.css';
import { IPerson } from '../../models/interface';
import Person from './Person/Person';

type Props = {
  data: IPerson[];
  loader: boolean;
};

function Cards({ data, loader }: Props) {
  return (
    <>
      {loader ? (
        <p>Loading...</p>
      ) : (
        data.map((person, i) => <Person data={person} key={i} />)
      )}
    </>
  );
}

export default Cards;
