import * as api from './api.js';

export async function getPokemons(offset, limit) {
  const key = `pokemon_limit=${limit}_offset=${offset}`;
  const urlCache = localStorage.getItem(key);

  if (urlCache) {
    return JSON.parse(urlCache);
  }

  const pageLoaded = await api.getPokemons(offset, limit);
  localStorage.setItem(key, JSON.stringify(pageLoaded));
  return pageLoaded;
}

export async function getPokemon(name) {
  const key = name;
  const pokemonCache = localStorage.getItem(key);

  if (pokemonCache) {
    return JSON.parse(pokemonCache);
  }

  const pokemonLoaded = await api.getPokemon(name);
  localStorage.setItem(key, JSON.stringify(pokemonLoaded));
  return pokemonLoaded;
}
