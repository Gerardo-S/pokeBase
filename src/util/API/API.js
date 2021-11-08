export const baseQuery = "https://pokeapi.co/api/v2/pokemon";

async function getAllPokemon(scroll, pageLimit) {
  let query = "";
  if (scroll) {
    query = `${baseQuery}/?limit=${50 + pageLimit}`;
  } else {
    query = `${baseQuery}/?limit=50`;
  }

  const response = await fetch(query);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

async function getPokemonDetails(pokemonId) {
  const response = await fetch(`${baseQuery}/` + pokemonId);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

async function getPokemonEvolutionChain(url) {
  const response = await fetch(url);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

async function getPokemonSpeciesDetail(pokemonId) {
  const response = await fetch(`${baseQuery}-species/${pokemonId}`);

  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

function getPokemonId(url) {
  const arr = url.split("/");
  return arr[arr.length - 2];
}

export {
  getAllPokemon,
  getPokemonDetails,
  getPokemonId,
  getPokemonEvolutionChain,
  getPokemonSpeciesDetail
};
