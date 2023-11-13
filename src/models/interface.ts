import { ReactNode } from 'react';

export interface IData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface IPerson {
  name: string;
  height: string;
  skin_color: string;
  hair_color: string;
  mass: string;
  url: string;
}

export interface ErrorProps {
  children?: ReactNode;
}

export const enum ResourcesType {
  People = 'people',
}
