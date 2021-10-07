import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import PageButton from "../components/buttons/pageButton";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import HomeContentContainer from "../components/homeContent/homeContentContainer";
import BodyContentContainer from "../components/homeContent/bodyContentContainer";
export default function Home() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Layout>
      <Head>
        <title>PokeBase</title>
        <meta name="description" content="Unofficial Pokemon Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContentContainer isMatch={isMatch}>
        <Typography variant="h1" component="h1">
          Unofficial <br /> Pokemon Pokedex
        </Typography>
        <BodyContentContainer isMatch={isMatch}>
          <Typography variant="h2" component="div">
            Find relevant information pertaining to existing pokemon.
          </Typography>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: isMatch ? "50px" : "60%"
            }}
          >
            <PageButton
              btnText={"Get Started"}
              btnWidth={"141px"}
              btnColor={"#FA9F17"}
              btnBgColor={"#8bc34a"}
            />
          </div>
        </BodyContentContainer>
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
      </HomeContentContainer>
    </Layout>
  );
}
