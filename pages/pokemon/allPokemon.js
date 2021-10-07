import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { Container, Box, Typography, Paper, Grid } from "@mui/material";
import styles from "../../components/pokemonList/pokemonList.module.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
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
        <Box
          sx={{
            mt: "2%",
            mx: "auto",
            px: "5px",
            width: "75%"
          }}
        >
          {" "}
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              rowSpacing={{ xs: 2, md: 8 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(20)).map((_, index) => (
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={3}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Avatar sx={{ width: 130, height: 130 }}>sx=2</Avatar>
                  {/* <Item>
                  </Item> */}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </main>
    </Layout>
  );
}
