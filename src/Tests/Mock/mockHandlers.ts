import { mockRes } from './mockRes';
import { http, HttpResponse } from 'msw';

export const mockHandlers = [
  http.get('https://swapi.dev/api/people/', () => {
    return HttpResponse.json(mockRes);
  }),
  http.get('https://swapi.dev/api/people/1', () => {
    return HttpResponse.json(mockRes.results[0]);
  }),
];
