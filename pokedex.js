/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/extensions
import { getPokemons, getPokemon } from './services/cache.js';
// eslint-disable-next-line import/extensions
import { showPokemons, showPokemon } from './ui/ui.js';
// eslint-disable-next-line import/extensions
import { handlePaginator } from './ui/pagination.js';
import getParametersFromURL from './utilities/utilities.js';

async function pokemonClickHandler(name) {
  showPokemon(await getPokemon(name));
}

export async function changePage(page) {
  const POKEMONS_PER_PAGE = 10;
  const limit = POKEMONS_PER_PAGE;
  let offset;
  let currentPage;

  if (typeof page === 'number') {
    offset = POKEMONS_PER_PAGE * (page - 1);
    currentPage = page;
  } else {
    const parameters = getParametersFromURL(page);
    currentPage = Math.ceil(parameters.offset / limit) + 1;
    offset = parameters.offset;
  }

  const response = await getPokemons(offset, limit);

  const {
    count: totaLPokemons,
    next: nextUrl,
    previous: previousURL,
    results: pokemons,
  } = response;

  showPokemons(pokemons, pokemonClickHandler);

  handlePaginator(totaLPokemons, currentPage, nextUrl, previousURL, POKEMONS_PER_PAGE, changePage);
}
