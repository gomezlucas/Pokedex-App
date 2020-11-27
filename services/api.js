export async function getPokemons(offset, limit) {
  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

  const result = await fetch(URL);
  return result.json();
}

export async function getPokemon(name) {
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const result = await fetch(URL);
  return result.json();
}
