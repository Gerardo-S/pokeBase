import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function AllPokemon() {
  return (
    <Layout>
      <Head>
        <title>All Pokemon Page</title>
      </Head>
      <main>
        <h1>All Pokemon Page</h1>
        <h2>
          <Link href="/">
            <a>Back to Home Page</a>
          </Link>
        </h2>
      </main>
    </Layout>
  );
}
