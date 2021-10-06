import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>PokeBase</title>
        <meta name="description" content="Unofficial Pokemon Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box sx={{ color: "white", mx: "auto", maxWidth: "95%" }}>
          <h1>Home Page</h1>
          <h2>
            <Link href="/pokemon/allPokemon">
              <a style={{ textDecoration: "none" }}>List of Pokemon Page</a>
            </Link>
          </h2>
          <h3>
            <Link href="/pokemon/pokemonDetail">
              <a style={{ textDecoration: "none" }}>Pokemon Details Page</a>
            </Link>
          </h3>
          <h4>
            <Link href="/about">
              <a style={{ textDecoration: "none" }}>About Page</a>
            </Link>
          </h4>
        </Box>
      </main>
    </Layout>
  );
}
