import Link from "next/link";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 &mdash; ATARA</title>
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <div className="flex h-screen bg-primary">
        <div className="m-auto text-center text-white">
          <h1 className="text-9xl font-waterBrush">404</h1>
          <h3 className="text-2xl uppercase font-squarePeg">
            Halaman Tidak di temukan!
          </h3>
          <Link href={"/"}>
            <a className="underline hover:cursor-pointer font-raleway">
              « Halaman Utama
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
