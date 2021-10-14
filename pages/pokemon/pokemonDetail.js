import Head from "next/head";
import Layout from "../../components/layout";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "../../components/pokemonList/pokemonList.module.css";
import Avatar from "@mui/material/Avatar";

export default function PokemonDetail() {
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
                <Typography variant="h3" component="div">
                  Bulbasaur
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
                  <Avatar sx={{ width: 310, height: 310 }}>Image</Avatar>
                </Grid>
                <Grid
                  item
                  xs={10}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="subtitle2" component="div">
                    Type: Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum
                    Weakness: Lorem ipsum Strengths: Lorem ipsum Evolved from:
                    Lorem ipsum
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{ position: "relative", bottom: "0px" }}
              container
              item
              spacing={2}
              md={12}
              sm={6}
              xs={12}
            >
              <Grid
                item
                display="flex"
                justifyContent="center"
                xs={12}
                md={12}
                sx={{ mt: "15%" }}
              >
                <Typography variant="subtitle1" component="div">
                  Forms
                </Typography>
              </Grid>

              {Array.from(Array(3)).map((_, index) => (
                <Grid
                  sx={{ display: "flex", justifyContent: "center" }}
                  item
                  xs={12}
                  md={4}
                  key={index}
                >
                  <Avatar sx={{ width: 200, height: 200 }}>sx=2</Avatar>
                  <Box className={styles.avatarDetailsContainer}>
                    <Typography variant="subtitle2" component="div">
                      Name: Hello World <br />
                      Type: Type Here
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
