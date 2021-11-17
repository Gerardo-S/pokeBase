import Head from "next/head";
import Layout from "../../src/components/layout";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "../../src/components/pokemonList/pokemonList.module.css";
import Avatar from "@mui/material/Avatar";
import {
  getPokemonDetails,
  getPokemonSpeciesDetail,
  getPokemonEvolutionChain,
  getPokemonId
} from "../../src/util/API/API";
import EvolutionTree from "../../src/components/evolutions/evolutionTree";

export async function getServerSideProps(context) {
  const res = await getPokemonDetails(context.params.id);
  const res3 = await getPokemonSpeciesDetail(context.params.id);
  const evoChain = await getPokemonEvolutionChain(res3.evolution_chain.url);

  const pokemon = await res;
  const speciesData = await res3;

  const base = evoChain.chain.species.url;
  const chain = evoChain.chain.evolves_to[0];

  const chainHelper = (baseURL, chainURL) => {
    if (baseURL == undefined || chainURL == undefined) {
      return;
    }
    let detailArray = [baseURL];
    const chain1Details = chainURL.species.url;
    const chain2DetailsBase = chainURL.evolves_to[0];

    if (chain1Details != undefined) {
      detailArray.push(chain1Details);
    }
    if (chain2DetailsBase != undefined) {
      const chain2Details = chain2DetailsBase.species.url;
      detailArray.push(chain2Details);
    }

    return detailArray;
  };

  const chainResult = chainHelper(base, chain);

  // get all details of evolution chain
  let promises = [];
  let spriteImageDetails;
  if (chainResult != undefined) {
    chainResult.forEach((d) => {
      promises.push(getPokemonDetails(getPokemonId(d)));
    });
    const evolutionListDetails = await Promise.all(promises);
    // Modify return data to only include image,name, and ID
    spriteImageDetails = evolutionListDetails.map((i) => {
      const { sprites, id, name } = i;
      return {
        sprites,
        id,
        name
      };
    });
  } else if (spriteImageDetails === undefined) {
    spriteImageDetails = null;
  }
  if (!pokemon) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      pokemon,
      speciesData,
      spriteImageDetails
    }
  };
}

export default function PokemonDetail({
  pokemon,
  speciesData,
  spriteImageDetails
}) {
  return (
    <Layout noHeroImg>
      <Head>
        <title>Pokemon Details Page</title>
      </Head>

      <Container sx={{ position: "relative", top: "20px" }}>
        <Box
          sx={{
            flexGrow: 1
          }}
        >
          <Grid container sx={{ pt: 4, minWidth: "360px" }}>
            <Grid
              container
              item
              spacing={2}
              md={12}
              sm={6}
              xs={12}
              sx={{ mb: "50px" }}
            >
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Typography variant="h3" component="div" sx={{ pb: 3 }}>
                  {pokemon.name}
                </Typography>
              </Grid>
              <Grid container spacing={2} justifyContent={"center"} item>
                <Grid
                  item
                  xs={12}
                  md={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-end"
                >
                  <Avatar
                    sx={{
                      width: 310,
                      height: 310,
                      border: 3,
                      borderColor:
                        speciesData.is_legendary || speciesData.is_mythical
                          ? "#BF0DFF"
                          : "#F47174"
                    }}
                    className={styles.avatarIconBackground}
                  >
                    <img
                      style={{ width: "220px", height: "220px" }}
                      alt={pokemon.name}
                      srcSet={pokemon.sprites.other.dream_world.front_default}
                    />
                  </Avatar>
                </Grid>
                <Grid
                  item
                  xs={10}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item container direction="column">
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      component="div"
                      sx={{ pb: 3, pt: 3 }}
                    >
                      {speciesData.evolves_from_species == null
                        ? null
                        : "Evolved From: " +
                          speciesData.evolves_from_species.name}
                      <br></br>
                      Natural Habitat: {speciesData.habitat.name}
                      <br></br>
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                      Description:{" "}
                      {speciesData.flavor_text_entries[10]["flavor_text"]} This
                      Pokemon has a {speciesData.growth_rate.name} growth rate
                      and can be hatched from a {speciesData.egg_groups[0].name}{" "}
                      egg.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {!spriteImageDetails && null}
            {spriteImageDetails && (
              <EvolutionTree evoList={spriteImageDetails} />
            )}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
