import Image from "next/future/image";
import Head from "next/head";

import Layout from "../../components/layout";
import FotoGown from "../../public/gown.jpeg";

const Gown = () => {
  return (
    <>
      <Head>
        <title>Coverall &mdash; ATARA</title>
        <meta name="description" content="Coverall Medis" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <div className="w-10/12 m-auto md:p-10 md:mt-12 md:flex">
        <div className="md:w-6/12 p-5">
          <Image src={FotoGown} className="w-10/12 m-auto rounded-xl" />
        </div>
        <div className="md:w-6/12 p-7">
          <h1 className="text-5xl font-semibold my-2 text-center">Coverall</h1>
          <p>
            <span className="font-bold">Nama Produk : </span>Lorem ipsum dolor
            sit amet.
          </p>
          <p>
            <span className="font-bold">Bahan : </span>Lorem ipsum dolor sit
            amet.
          </p>
          <p>
            <span className="font-bold">Keterangan : </span>Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Adipisci vel eveniet
            consectetur facere molestias velit architecto accusantium voluptate
            est repellat. Ducimus delectus voluptatem cupiditate debitis, est
            sed soluta eum, excepturi consequatur dignissimos quo dolores atque
            cum porro iste repudiandae nemo nam et ab voluptatum saepe a culpa.
            Distinctio est voluptatum assumenda culpa impedit molestiae sed quis
            nulla odio quia. Voluptates accusamus eligendi harum officiis,
            beatae ratione odio reiciendis molestias impedit voluptate
            consequatur sunt ullam corporis veritatis. Ducimus vero sequi,
            explicabo praesentium natus dignissimos dolorem voluptatum atque rem
            culpa ratione, nostrum cumque veritatis, ipsa aut accusamus totam
            dolor obcaecati doloribus! Qui.
          </p>
          <p>
            <span className="font-bold">lore : </span>Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
      <Layout />
    </>
  );
};

export default Gown;
