import Image from "next/future/image";
import Gown from "../../../public/gown.jpeg";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <Image
            src={Gown}
            alt="hero"
            className="rounded-lg shadow-slate-900 max-h-screen"
          />
          <div>
            <h1 className="text-5xl font-bold">PT. ATARA CIPTA MEDIKA</h1>
            <p className="py-6 text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              perferendis quisquam veniam earum corrupti vel ex ut qui porro
              adipisci? Suscipit adipisci aperiam in consequuntur dolor unde
              reprehenderit iste magnam?......
            </p>
            <button className="btn btn-primary rounded-xl shadow-lg">
              Lebih Banyak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
