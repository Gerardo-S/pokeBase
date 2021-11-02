async function getAllPokemon(scroll, pageLimit) {
  let query = "";
  if (scroll) {
    query = `https://pokeapi.co/api/v2/pokemon/?limit=${20 + pageLimit}`;
  } else {
    query = "https://pokeapi.co/api/v2/pokemon/";
  }

  const response = await fetch(query);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

async function getPokemonDetails(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

async function getPokemonEvolutionChain(url) {
  const response = await fetch(url);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

async function getPokemonSpeciesDetail(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );

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
