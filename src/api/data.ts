// import { Params } from 'react-router-dom';
// import { Params } from 'react-router-dom';
import { IData, IPerson, ResourcesType } from '../models/interface';
// import { IData } from '../models/interface';

const url = `https://swapi.dev/api/${ResourcesType.People}/`;

/* export async function getData(urlParams: string | number) {
  const response: IData = await fetch(
    `${url}${
      typeof urlParams != 'string'
        ? `?page=${urlParams}`
        : `?search=${urlParams}`
    }`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return response;
} */

export const getData = async (
  search: string,
  page: number,
  limit: number,
  options: RequestInit = {}
): Promise<IData<IPerson>> => {
  const searchParams = new URLSearchParams();
  search && searchParams.append('search', search);
  page && searchParams.append('page', page.toString());
  limit && searchParams.append('limit', limit.toString());

  const res = await fetch(url + '?' + searchParams, options);
  if (!res.ok) {
    throw Error('Not found!');
  }
  return res.json();
};

/* export const getDataWithParams = async ({
  params,
}: {
  params: Readonly<Params<string>>;
}) => {
  const { param } = params;
  const res = await fetch(url + `?${param}`);
  if (!res.ok) {
    throw Error('Not found!');
  }
  return res.json();
}; */
