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

async function getPokemonEvolutionChain(url) {
  const response = await fetch(url);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

async function getPokemonSpeciesDetail(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );

  //  TODO Extract only necessary information ===========================================
  // const modifiedRes = response.map((s) => {
  //   const {
  //     egg_group,
  //     evolves_from_species,
  //     flavor_text_entries,
  //     growth_rate,
  //     habitat,
  //     is_legendary,
  //     is_mythical
  //   } = s;
  //   return {
  //     eggGroup: egg_group,
  //     evolvedFrom: evolves_from_species,
  //     growthRate: growth_rate,
  //     isLegendary: is_legendary,
  //     isMythical: is_mythical,
  //     description: flavor_text_entries,
  //     habitat
  //   };
  // });

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
