import Head from "next/head";
import styles from "../styles/About.module.css";
import Layout from "../src/components/layout";
import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Layout noHeroImg>
      <Head>
        <title>About</title>
      </Head>

      <Container maxWidth="xl" sx={{ pt: 4 }}>
        <main>
          <section>
            <Typography variant="h1" component="h1" sx={{ pt: 4 }}>
              What is PokeBase?
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Typography variant="body1" component="p">
                <span className={styles.appName}>PokeBase</span> is an
                unofficial pokedex that allows a user scroll through a list of
                Pokemon species, type, and rarity.
              </Typography>
            </Box>
          </section>
          <section>
            <Typography variant="h1" component="h1" sx={{ pt: 4 }}>
              Tech Used?
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Typography variant="body1" component="p">
                <span className={styles.appName}>PokeBase</span> was created as
                a way for me to learn{" "}
                <span className={styles.techUsed}>NextJs</span>, and{" "}
                <span className={styles.techUsed}>Material-Ui</span> with the
                addition of css modules. Application was bootstrapped from
                boilerplate{" "}
                <span className={styles.techUsed}>mui-org/material-ui</span>{" "}
                repo.
              </Typography>
            </Box>
          </section>
          <section>
            <Typography variant="h1" component="h1" sx={{ pt: 4 }}>
              Attribution
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Typography variant="body1" component="p">
                <span className={styles.appName}>PokeBase</span> uses the{" "}
                <a
                  className={styles.exLink}
                  href="https://pokeapi.co/"
                  target="_blank"
                >
                  PokeAPI
                </a>{" "}
                created by{" "}
                <a
                  className={styles.exLink}
                  href="https://phalt.github.io/"
                  target="_blank"
                >
                  Paul Hallett
                </a>{" "}
                and and other PokeAPI contributors around the world.
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Pikachu hero image came from{" "}
                <a
                  className={styles.exLink}
                  href="https://unsplash.com/@liaphotography"
                  target="_blank"
                >
                  Lia
                </a>{" "}
                on{" "}
                <a
                  className={styles.exLink}
                  href="https://unsplash.com/s/photos/pikachu"
                  target="_blank"
                >
                  Unsplash
                </a>
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Pokeball icon on the navigation bar came from{" "}
                <a
                  className={styles.exLink}
                  href="https://www.clipartmax.com/middle/m2i8d3G6K9m2b1i8_pokeball-clipart-svg-pokeball-icon/"
                  target="_blank"
                >
                  Clipartmax
                </a>
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Thunderbolt icon on the navigation bar came from{" "}
                <a
                  className={styles.exLink}
                  href="https://www.pngegg.com/en/png-zwxai/download"
                  target="_blank"
                >
                  PNG EGG
                </a>
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Loading SVG "Circles" was developed by{" "}
                <a
                  className={styles.exLink}
                  href="https://samherbert.net/svg-loaders/"
                  target="_blank"
                >
                  Sam
                </a>
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Loading SVG "Circles" was developed by{" "}
                <a
                  className={styles.exLink}
                  href="https://samherbert.net/svg-loaders/"
                  target="_blank"
                >
                  Sam
                </a>
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Pokemon and Pokemon character names are trademarks of Nintendo.
                The data and images are used without claim of ownership and
                belong to their respective owners.
              </Typography>
            </Box>
          </section>
        </main>
      </Container>
    </Layout>
  );
}
