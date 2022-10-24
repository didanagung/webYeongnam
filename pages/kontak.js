import Head from "next/head";

import { ImEnvelop, ImLocation2, ImPhone } from "react-icons/im";

import Layout from "../components/layout";

const Kontak = () => {
  return (
    <>
      <Head>
        <title>Kontak &mdash; ATARA</title>
        <meta name="description" content="Kontak alat kesehatan bandung" />
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <div className="p-7 text-center md:mt-16">
        <h1 className="text-5xl font-semibold my-2">Kontak Kami</h1>
        <p className="font-extralight mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          blanditiis.
        </p>
        <section className="flex w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.977655838078!2d107.8159664143169!3d-6.893275869370351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68db8c00094157%3A0xc2ad6aedbfff3442!2sPT.%20YEONGNAM%20SMD%20INDUSTRY!5e0!3m2!1sen!2sid!4v1665469561634!5m2!1sen!2sid"
            className="border-0 w-10/12 h-96 m-auto shadow-2xl rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section>
          <ul className="grid grid-cols-1 gap-6 md:gap-3 md:grid-cols-3 w-10/12 m-auto my-7">
            <li className="w-full bg-white rounded-xl shadow-xl p-4 group hover:cursor-pointer hover:bg-primary flex">
              <div className="m-auto">
                <ImLocation2 className="mx-auto w-10 h-10 mb-1 group-hover:text-white" />
                <p className="font-semibold group-hover:text-white">
                  Jalan AMD Dusun Tarikolot Kecamatan Pamulihan Kabupaten
                  Sumedang Provinsi Jawa Barat
                </p>
              </div>
            </li>
            <li className="w-full bg-white rounded-xl shadow-xl p-4 group hover:cursor-pointer hover:bg-primary flex">
              <div className="m-auto">
                <ImPhone className="mx-auto w-10 h-10 mb-1 group-hover:text-white" />
                <a
                  href="tel:02287914545"
                  className="font-semibold group-hover:text-white"
                >
                  (022) 87914545
                </a>
              </div>
            </li>
            <li className="w-full bg-white rounded-xl shadow-xl p-4 group hover:cursor-pointer hover:bg-primary flex">
              <div className="m-auto">
                <ImEnvelop className="mx-auto w-10 h-10 mb-1 group-hover:text-white" />
                <a
                  href="mailto:acimedika@gmail.com"
                  className="font-semibold group-hover:text-white"
                >
                  acimedika@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <Layout />
    </>
  );
};

export default Kontak;
