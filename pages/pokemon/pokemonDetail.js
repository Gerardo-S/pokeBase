import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
export default function PokemonDetail() {
  return (
    <Layout>
      <Head>
        <title>Pokemon Details Page</title>
      </Head>
      <main>
        <h1>Pokemon Details Page</h1>
        <h2>
          <Link href="/">
            <a>Back to Home Page</a>
          </Link>
        </h2>
      </main>
      ;
    </Layout>
  );
}
