/* eslint-disable import/prefer-default-export */

function createItemPage(page) {
  const $linkPage = document.createElement('a');
  $linkPage.classList = 'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer';
  $linkPage.textContent = page;
  return $linkPage;
}

export function handlePaginator(
  totalPokemons,
  page,
  nextURL,
  previousURL,
  pokemonsPerPage,
  callbackPagination,
) {
  const $paginationPages = document.getElementById('paginator-pages');
  $paginationPages.innerHTML = '';
  const $previousPage = document.getElementById('previous-page');
  const $nextPage = document.getElementById('next-page');
  const $totalPokemons = document.getElementById('total-pokemons');
  const $toPokemons = document.getElementById('to-pokemons');
  const $fromPokemons = document.getElementById('from-pokemons');

  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);
  $totalPokemons.textContent = totalPokemons;

  const fromIndicator = page === 1 ? 1 : pokemonsPerPage * (page - 1) + 1;
  $fromPokemons.textContent = fromIndicator;

  $toPokemons.textContent = (fromIndicator + pokemonsPerPage) - 1;

  if (previousURL) {
    $previousPage.onclick = () => callbackPagination(previousURL);
  }

  if (nextURL) {
    $nextPage.onclick = () => callbackPagination(nextURL);
  } else {
    $toPokemons.textContent = totalPokemons;
  }

  for (let i = 0; i < totalPages; i += 1) {
    const pageNumber = i + 1;
    const $page = createItemPage(pageNumber);
    $page.addEventListener('click', () => {
      callbackPagination(pageNumber);
    });
    if (i === (page - 1)) {
      $page.classList.add('active');
    }
    $paginationPages.appendChild($page);
  }
}
