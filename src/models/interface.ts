export interface IPeople {
  name: string;
  height: string;
  skin_color: string;
  hair_color: string;
  mass: string;
}

export interface IData {
  data: IPeople[];
  loader: boolean;
}

export interface IError {
  error: boolean;
  messages: string;
}
