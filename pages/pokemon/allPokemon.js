import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { Box, Typography } from "@mui/material";
import ListContainer from "../../components/pokemonList/listContainer";
import ItemGrid from "../../components/pokemonList/itemGrid";
import styles from "../../components/pokemonList/pokemonList.module.css";
import Avatar from "@mui/material/Avatar";

export default function AllPokemon() {
  return (
    <Layout>
      <Head>
        <title>All Pokemon Page</title>
      </Head>
      <main>
        <Box className={styles.pokemonTitle}>
          <Typography variant="h3" component="div">
            Pokemon
          </Typography>
        </Box>
        <ListContainer>
          {Array.from(Array(20)).map((_, index) => (
            <ItemGrid key={index}>
              <Avatar sx={{ width: 130, height: 130 }}>sx=2</Avatar>
              <Box className={styles.avatarDetailsContainer}>
                <Typography variant="subtitle2" component="div">
                  Name: Hello World <br />
                  Type: Type Here
                </Typography>
              </Box>
            </ItemGrid>
          ))}
        </ListContainer>
      </main>
    </Layout>
  );
}
