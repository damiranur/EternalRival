import axios from 'axios';
import { setAnonymousToken } from './getToken';
import { ResponseError } from '../interfaces';

const apiUrl: string = 'https://api.us-central1.gcp.commercetools.com';
const projectKey: string = 'soap-shop';

export async function getProductsList(query = '', limit = 10, page = '1') {
  query = query.trim().toLowerCase();
  const offset = (+page - 1) * limit;
  const accessTokenJson: string | null = localStorage.getItem('token');
  try {
    const accessToken = JSON.parse(accessTokenJson!).access_token;

    const response = await axios.get(
      `${apiUrl}/${projectKey}/product-projections/search`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          offset,
          limit,
          ['text.en']: query,
        },
      }
    );
    return response.data;
  } catch (error) {
    const err = error as ResponseError;
    if (err.response.data.statusCode === 401) {
      await setAnonymousToken();
      await getProductsList(query, limit, page);
    }
  }
}
