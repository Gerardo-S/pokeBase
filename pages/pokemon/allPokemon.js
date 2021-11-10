import React, { useEffect, useState } from "react";
import Head from "next/head";
import LoadingSVG from "../../public/images/circles.svg";
import Image from "next/image";
import Link from "next/link";
import {
  getAllPokemon,
  getPokemonDetails,
  getPokemonId
} from "../../src/util/API/API";
import Layout from "../../src/components/layout";
import { Box, Typography, Paper, InputBase, styled } from "@mui/material";

import ListContainer from "../../src/components/pokemonList/listContainer";
import ItemGrid from "../../src/components/pokemonList/itemGrid";
import SearchIcon from "@mui/icons-material/Search";

import styles from "../../src/components/pokemonList/pokemonList.module.css";
import Avatar from "@mui/material/Avatar";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [endOfList, setEndOfList] = useState("");
  const [pageLimit, setPageLimit] = useState(10);

  const handleScroll = (e) => {
    const bottom =
      Math.trunc(e.target.scrollHeight - e.target.scrollTop) ===
      e.target.clientHeight;
    if (bottom) {
      setEndOfList("true");
    }
  };
  useEffect(() => {
    async function getData() {
      const pokemonList = await getAllPokemon();
      let promises = [];
      pokemonList.results.forEach((p) => {
        promises.push(getPokemonDetails(getPokemonId(p.url)));
      });

      const details = await Promise.all(promises);
      setPokemon(details);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getAdditionalQuerysOnScroll() {
      const pokemonList = await getAllPokemon(endOfList, pageLimit);
      let promises = [];
      pokemonList.results.forEach((p) => {
        promises.push(getPokemonDetails(getPokemonId(p.url)));
      });
      const details = await Promise.all(promises);
      setPokemon(details);
      setPageLimit(pageLimit + 10);
      setEndOfList("false");
    }

    endOfList ? getAdditionalQuerysOnScroll() : null;
  }, [endOfList]);

  return (
    <Layout>
      <Head>
        <title>All Pokemon Page</title>
      </Head>
      <main
        style={{
          height: "100%",
          paddingBottom: "20px",
          marginBottom: "2%"
        }}
      >
        <Box
          className={styles.pokemonTitle}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 4,
            alignItems: "center"
          }}
        >
          <Typography variant="h3" component="div">
            Pokemon
          </Typography>
          <Paper
            className={styles.searchPaper}
            sx={{
              backgroundColor: "rgba(255,255,255,.15)",
              p: 1,
              display: "flex",
              alignItems: "center"
            }}
          >
            <SearchIcon fontSize="large" color="primary" />
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
        </Box>

        <ListContainer handleScroll={handleScroll}>
          {!pokemon && <Image src={LoadingSVG} width={130} height={130} />}
          {pokemon && (
            <>
              {pokemon.map((p) => (
                <ItemGrid key={p.id}>
                  <Link
                    href={{
                      pathname: "/pokemon/[slug]",
                      query: { slug: p.id }
                    }}
                  >
                    <Avatar
                      className={styles.avatarIconBackground}
                      alt={p.name}
                      src={p.sprites.other["official-artwork"].front_default}
                      sx={{
                        width: 130,
                        height: 130,
                        border: 3,
                        borderColor: "#F47174"
                      }}
                    />
                  </Link>
                  <Box className={styles.avatarDetailsContainer}>
                    <Typography variant="subtitle2" component="div">
                      Name: {p.name}
                      <br />
                      Type: {p.types[0].type.name}
                    </Typography>
                  </Box>
                </ItemGrid>
              ))}
            </>
          )}
        </ListContainer>
      </main>
    </Layout>
  );
}
