import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/layout";
import { Container, Typography, Box } from "@mui/material";
export default function About() {
  return (
    <Layout noHeroImg>
      <Head>
        <title>About</title>
      </Head>

      <Container maxWidth="xlg" sx={{ bgcolor: "red" }}>
        <Typography variant="h1" component="h1" sx={{ pt: 3 }}>
          What is PokeBase?
        </Typography>
        <Box>
          <p>
            Hello Wold lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </p>
        </Box>

        <Box>
          <p>
            Hello Wold lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </p>
        </Box>
      </Container>
    </Layout>
  );
}
