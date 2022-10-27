import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";
import ImageCard from "../../public/gown.jpeg";

const Produk = () => {
  return (
    <>
      <Head>
        <title>Produk &mdash; ATARA</title>
        <meta name="description" content="Produk Alat Kesehatan" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <div className="text-center mb-12 p-5 md:p-10 md:mt-12">
        <h1 className="text-5xl font-semibold my-2 font-tapestry">Produk</h1>
        <p className="font-extralight mb-10">
          List Produk yang telah kami buat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="flex rounded-xl p-2 shadow-lg">
            <div className="w-1/2 m-auto">
              <Image src={ImageCard} alt="gown" />
            </div>
            <div className="w-1/2 flex">
              <div className="m-auto p-1">
                <h3 className="text-center text-2xl font-semibold my-2 font-raleway">
                  Gown
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link href="/produk/gown">
                  <a className="btn btn-accent btn-sm rounded-lg my-2">
                    Detail
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex rounded-xl p-2 shadow-lg">
            <div className="w-1/2 m-auto">
              <Image src={ImageCard} alt="coverall" />
            </div>
            <div className="w-1/2 flex">
              <div className="m-auto p-1">
                <h3 className="text-center text-2xl font-semibold my-2 font-raleway">
                  Coverall
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link href="/produk/coverall">
                  <a className="btn btn-accent btn-sm rounded-lg my-2">
                    Detail
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex rounded-xl p-2 shadow-lg">
            <div className="w-1/2 m-auto">
              <Image src={ImageCard} alt="Opthalmic Drape" />
            </div>
            <div className="w-1/2 flex">
              <div className="m-auto p-1">
                <h3 className="text-center text-2xl font-semibold my-2 font-raleway">
                  Opthalmic Drape
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link href="/produk/gown">
                  <a className="btn btn-accent btn-sm rounded-lg my-2">
                    Detail
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex rounded-xl p-2 shadow-lg">
            <div className="w-1/2 m-auto">
              <Image src={ImageCard} alt="Universal Sets" />
            </div>
            <div className="w-1/2 flex">
              <div className="m-auto p-1">
                <h3 className="text-center text-2xl font-semibold my-2 font-raleway">
                  Universal Sets
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link href="/produk/gown">
                  <a className="btn btn-accent btn-sm rounded-lg my-2">
                    Detail
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Layout />
    </>
  );
};

export default Produk;
