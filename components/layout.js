import Head from "next/head";
import styles from "../components/layout.module.css";
import NavBar from "../components/navBar/navBar";
import HeroImg from "./heroImg/heroImg";
import Footer from "./footer/footer";
export const siteTitle = "Unofficial Pokemon Pokedex";

export default function Layout({ children, home, noHeroImg }) {
  return (
    <div className={home ? styles.background : styles.characterListBackground}>
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
      <main>
        {children}
        <Footer />
      </main>
      {noHeroImg ? null : <HeroImg />}
    </div>
  );
}
