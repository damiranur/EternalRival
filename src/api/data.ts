import { IPeople } from '../models/interface';

const url = 'https://swapi.dev/api/people/';

export function getData(page: number) {
  const response: Promise<IPeople[]> = fetch(`${url}?page=${page}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
  return response;
}
