import Head from "next/head";
import Layout from "./components/layout";
import Main from "./components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home &mdash; YEONGNAM</title>
        <meta name="description" content="PT YEONGNAM SMD INDUSTRY" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <main>
        <Main />
        <Layout />
      </main>
    </>
  );
}
