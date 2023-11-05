// import { Params } from 'react-router-dom';
import { Params } from 'react-router-dom';
// import { IData } from '../models/interface';

const url = 'https://swapi.dev/api/people/';

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

export const getData = async () => {
  const res = await fetch(url);
  return res.json();
};

export const getDataWithParams = async ({
  params,
}: {
  params: Readonly<Params<string>>;
}) => {
  const { param } = params;
  const res = await fetch(url + `?${param}`);
  console.log(res);
  return res.json();
};
