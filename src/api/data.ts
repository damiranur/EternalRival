// import { Params } from 'react-router-dom';
// import { Params } from 'react-router-dom';
import { IData, IPerson, ResourcesType } from '../models/interface';
// import { IData } from '../models/interface';

const url = `https://swapi.dev/api/${ResourcesType.People}/`;

export const getPeopleData = async (
  request: string,
  page: number,
  limit: number,
  options: RequestInit = {}
): Promise<IData<IPerson>> => {
  const searchParams = new URLSearchParams();
  request && searchParams.append('search', request);
  page && searchParams.append('page', page.toString());
  limit && searchParams.append('limit', limit.toString());

  const res = await fetch(url + '?' + searchParams, options);
  if (!res.ok) {
    throw Error('Not found!');
  }
  return res.json();
};

export const getPersonData = async (id: number, options: RequestInit = {}) => {
  const res = await fetch(url + id, options);
  if (!res.ok) {
    throw Error('Not found person!');
  }
  return res.json();
};
