import Image from "next/future/image";
import Link from "next/link";

import Gown from "../../public/gown.jpeg";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen md:flex md:p-5 mt-6 md:my-12">
        <div className="md:w-1/2 md:m-auto">
          <Image
            src={Gown}
            alt="hero icon"
            className="w-9/12 m-auto rounded-xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 m-auto text-center md:text-start md:relative">
          <div className="absolute h-72 w-72 rounded-full bg-primary -top-72 -right-32 blur-xl opacity-25 invisible md:visible"></div>
          <div className="absolute h-72 w-72 rounded-full bg-primary -bottom-72 -left-32 blur-xl opacity-25 -z-10 invisible md:visible"></div>
          <h1 className="text-5xl font-bold my-5">PT. ATARA CIPTA MEDIKA</h1>
          <Link href={"/"}>
            <a className="btn btn-primary rounded-lg shadow-xl w-10/12 mx-auto md:w-auto">
              Tentang Kami
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
