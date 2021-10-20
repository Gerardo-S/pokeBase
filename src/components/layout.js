import Head from "next/head";
import styles from "../components/layout.module.css";
import NavBar from "../components/navBar/navBar";
import HeroImg from "./heroImg/heroImg";
import Footer from "./footer/footer";
import { useMediaQuery, useTheme } from "@mui/material";
export const siteTitle = "Unofficial Pokemon Pokedex";

const adjustHeight4Mobile = (isMatch) => {
  if (isMatch) {
    return styles.characterListBackgroundMobileView;
  } else {
    return styles.characterListBackground;
  }
};

export default function Layout({ children, home, noHeroImg }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <div className={home ? styles.background : adjustHeight4Mobile(isMatch)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Unofficial pokemon application providing list of pokemon and their respective classifications, including; species, evolutions, type, weakness and resistances from the PokeApi"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <NavBar />
      <main>{children}</main>
      <div
        style={{ position: "absolute", top: "0px" }}
        className={styles.heroImgPosition}
      >
        {noHeroImg ? null : (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <HeroImg />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
