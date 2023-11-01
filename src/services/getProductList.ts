import axios from 'axios';
import { setAnonymousToken } from './getToken';
import { ResponseError } from '../interfaces';

const apiUrl: string = 'https://api.us-central1.gcp.commercetools.com';
const projectKey: string = 'soap-shop';

export async function getProductsList(query = '', page = 1, limit = 10) {
  query = query.trim().toLowerCase();
  const accessTokenJson: string | null = localStorage.getItem('token');
  try {
    const accessToken = JSON.parse(accessTokenJson!).access_token;
    const queryParams = {
      page,
      limit,
      ['text.en']: query,
    };

    const response = await axios.get(
      `${apiUrl}/${projectKey}/product-projections/search`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: queryParams,
      }
    );
    return response.data.results;
  } catch (error) {
    const err = error as ResponseError;
    if (err.response.data.statusCode === 401) {
      await setAnonymousToken();
      await getProductsList(query, page, limit);
    }
  }
}
