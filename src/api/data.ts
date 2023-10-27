import { IPeople } from '../models/interface';

const url = 'https://swapi.dev/api/people';

export function getData(urlParams: string | number) {
  const response: Promise<IPeople[]> = fetch(
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
      return data.results;
    });
  return response;
}
