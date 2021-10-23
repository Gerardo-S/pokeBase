import Head from "next/head";
import Layout from "../../src/components/layout";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "../../src/components/pokemonList/pokemonList.module.css";
import Avatar from "@mui/material/Avatar";
import {
  getPokemonDetails,
  getPokemonSpeciesDetail
} from "../../src/util/API/API";
import EvolutionTree from "../../src/components/evolutions/evolutionTree";

export async function getServerSideProps(context) {
  const res = await getPokemonDetails(context.params.id);
  // const res2 = await getPokemonEvolutionChain(context.params.id);
  const res3 = await getPokemonSpeciesDetail(context.params.id);

  const pokemon = await res;
  // const evoData = await res2;
  const speciesData = await res3;
  if (!pokemon) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      pokemon,
      // evoData,
      speciesData
    }
  };
}

export default function PokemonDetail({ pokemon, speciesData }) {
  // console.log("pokemon", pokemon);
  // console.log("evoData", evoData);
  // console.log("SpeciesData", speciesData.evolution_chain.url);
  // const evoStep1 = evoData.chain.evolves_to[0].species.name;
  // const evoStep2 = evoData.chain.evolves_to[0].evolves_to[0].species.name;

  const evoChainURL = speciesData.evolution_chain.url;
  // console.log("evoChainURL", evoChainURL);

  // console.log("evoStep1", evoStep1);
  // console.log("evoStep2", evoStep2);

  return (
    <Layout noHeroImg>
      <Head>
        <title>Pokemon Details Page</title>
      </Head>

      <Container sx={{ position: "relative", top: "80px" }}>
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
                    alt={pokemon.name}
                    src={pokemon.sprites.other.dream_world.front_default}
                  />
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
                      variant="subtitle2"
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
            <EvolutionTree evoChainURL={evoChainURL} />
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
