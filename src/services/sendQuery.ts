import axios from 'axios';
import { PokemonData } from '../interfaces';

async function getPokemonInfo(query: string) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/ability/${query}/`
  );
  if (response.status === 200 && isNaN(+query)) {
    return response.data;
  } else {
    throw new Error('Pokemon does not exist');
  }
}

async function getList() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  if (response.status === 200) {
    return response.data.results;
  } else {
    throw new Error('Server error');
  }
}

async function sendQuery(query?: string): Promise<PokemonData> {
  query = query?.trim().toLowerCase();
  return query ? await getPokemonInfo(query) : await getList();
}

export default sendQuery;
