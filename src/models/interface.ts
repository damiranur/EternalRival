import { ReactNode } from 'react';

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
