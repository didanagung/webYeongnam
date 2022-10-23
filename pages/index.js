import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home &mdash; ATARA</title>
        <meta name="description" content="PT ATARA CIPTA MEDIKA" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <main>
        <Main />
        <Layout />
      </main>
    </>
  );
}
