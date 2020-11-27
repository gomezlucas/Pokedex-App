function checkTypeToAddColor(type) {
  switch (type) {
    case 'fire':
      return 'red';
    case 'water':
      return 'blue';
    case 'grass':
    case 'bug':
      return 'green';
    case 'psychic':
    case 'ghost':
      return 'purple';
    case 'electric':
      return 'yellow';
    default:
      return 'gray';
  }
}

export function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.className = 'flex shadow-md hover:bg-blue-100 cursor-pointer ';
  card.innerHTML = `
                      <h1 class="flex-grow text-xl font-semibold capitalize py-3 pl-2   ">
                      ${pokemon.name}
                      </h1>
        `;
  return card;
}

export function showPokemons(pokemonArray, callback) {
  const $pokemonContainer = document.getElementById('pokemons');
  $pokemonContainer.innerHTML = '';
  pokemonArray.forEach((pokemon) => {
    const pokemonCard = createPokemonCard(pokemon);
    pokemonCard.addEventListener('click', () => {
      callback(pokemon.name);
    });
    $pokemonContainer.appendChild(pokemonCard);
  });
}

export function showPokemon(pokemon) {
  const $pokemonContainer = document.getElementById('pokemon-selected');
  $pokemonContainer.innerHTML = '';
  const $pokemonCard = document.createElement('div');
  const $types = pokemon.types.map((type) => ` ${type.type.name}`);
  const $abilities = pokemon.abilities.map((ability) => `<li class="ml-3 capitalize">${ability.ability.name} </li>`).join('');
  $pokemonCard.innerHTML = `
  <img class="mx-auto  md:mt-12 h-56 object-cover object-center"
  src="${pokemon.sprites.other['official-artwork'].front_default}"
  alt="avatar">
<div class="flex items-center px-6 py-3 bg-${checkTypeToAddColor(pokemon.types[0].type.name)}-800">
  <h1 class="mx-3 text-white font-semibold text-lg capitalize"> ${$types} </h1>
</div>
<div class="py-4 px-6">
  <h1 class="text-2xl font-semibold text-gray-800 capitalize"> ${pokemon.name}</h1>

  <div class="flex items-center mt-4 text-gray-700">

      <h1 class="px-2 text-sm"> Height : ${pokemon.height}</h1>
  </div>
  <div class="flex items-center mt-4 text-gray-700">

      <h1 class="px-2 text-sm"> Weight: ${pokemon.weight}</h1>
  </div>
  <div class="flex items-center mt-4 text-gray-700">

      <h1 class="px-2 text-sm">Habilities </h1>
      <ul id="pokemon-habilities">
      ${$abilities}
      </ul>
  </div>
</div>
  `;

  $pokemonContainer.appendChild($pokemonCard);
}
