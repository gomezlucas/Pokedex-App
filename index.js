// eslint-disable-next-line import/extensions
import { changePage } from './pokedex.js';

// https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0

function initiate() {
  return changePage(1);
}

initiate();
