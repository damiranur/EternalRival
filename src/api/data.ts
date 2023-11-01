import { IData } from '../models/interface';

const url = 'https://swapi.dev/api/people';

export async function getData(urlParams: string | number) {
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
}
