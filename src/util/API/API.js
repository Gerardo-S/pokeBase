async function getAllPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
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

function getPokemonId(url) {
  const arr = url.split("/");
  return arr[arr.length - 2];
}

export { getAllPokemon, getPokemonDetails, getPokemonId };
