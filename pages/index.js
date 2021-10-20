import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../src/components/layout";
import PageButton from "../src/components/buttons/pageButton";
import { useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import HomeContentContainer from "../src/components/homeContent/homeContentContainer";
import BodyContentContainer from "../src/components/homeContent/bodyContentContainer";
export default function Home() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Layout home>
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
            <Link href="/pokemon/allPokemon">
              <a className={styles.pageButtonLink}>
                <PageButton
                  btnText={"Get Started"}
                  btnWidth={"141px"}
                  btnColor={"#FA9F17"}
                  btnBgColor={"#8bc34a"}
                />
              </a>
            </Link>
          </div>
        </BodyContentContainer>
      </HomeContentContainer>
    </Layout>
  );
}
