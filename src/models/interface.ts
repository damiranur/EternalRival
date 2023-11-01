import { ReactNode } from 'react';

export interface IData {
  count: number;
  next: string;
  previous: null | string;
  results: IPerson[];
}

export interface IPerson {
  name: string;
  height: string;
  skin_color: string;
  hair_color: string;
  mass: string;
}

export interface ErrorProps {
  children?: ReactNode;
}
