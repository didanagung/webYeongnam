import Image from "next/future/image";

import FotoCatokUltrasonik from "../../public/galeri/catokUltrasonik.jpeg";
import FotoCutting from "../../public/galeri/cutting.jpeg";
import FotoGudang from "../../public/galeri/gudang.jpeg";
import FotoHampar from "../../public/galeri/hampar.jpeg";
import FotoJahit from "../../public/galeri/jahit.jpeg";
import FotoJahit2 from "../../public/galeri/jahit2.jpeg";
import FotoJahitGown from "../../public/galeri/jahitGown.jpeg";
import FotoObras from "../../public/galeri/obras.jpeg";
import FotoPerusahaan from "../../public/galeri/Perusahaan.jpeg";
import FotoProduksi from "../../public/galeri/produksi.jpeg";
import FotoTampakDepan from "../../public/galeri/tampakDepan.jpeg";
import FotoUltrasonik from "../../public/galeri/ultrasonik.jpeg";

const Galeri = () => {
  return (
    <>
      <section>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 29.17918134532306,168.20491551284647 58.35836269064612,136.4098310256929 83,161 C 107.64163730935388,185.5901689743071 127.74573058273856,266.5655914100749 146,262 C 164.25426941726144,257.4344085899251 180.6587149783996,167.32780333400746 207,158 C 233.3412850216004,148.67219666599254 269.61940950366306,220.1231952538953 294,232 C 318.38059049633694,243.8768047461047 330.86364700694827,196.17941565041144 350,192 C 369.13635299305173,187.82058434958856 394.92600246854397,227.159142144459 420,252 C 445.07399753145603,276.840857855541 469.4323431188759,287.18401577175246 497,264 C 524.5676568811241,240.81598422824754 555.3446250559521,184.1047947685312 582,183 C 608.6553749440479,181.8952052314688 631.1891566573157,236.39680515412272 654,239 C 676.8108433426843,241.60319484587728 699.8987483147849,192.3079846149779 724,181 C 748.1012516852151,169.6920153850221 773.2158500835445,196.3712563859656 797,194 C 820.7841499164555,191.6287436140344 843.2378513510373,160.20698984115975 865,177 C 886.7621486489627,193.79301015884025 907.8327445123065,258.80078424939535 932,272 C 956.1672554876935,285.19921575060465 983.431170599737,246.5898731612588 1009,220 C 1034.568829400263,193.4101268387412 1058.4425730887456,178.83972310556942 1082,171 C 1105.5574269112544,163.16027689443058 1128.7985370452807,162.05123441646344 1150,185 C 1171.2014629547193,207.94876558353656 1190.363278730131,254.9553392285768 1217,240 C 1243.636721269869,225.0446607714232 1277.7483480341955,148.1274086692293 1304,129 C 1330.2516519658045,109.87259133077069 1348.6433291330868,148.53502609450592 1370,170 C 1391.3566708669132,191.46497390549408 1415.6783354334566,195.73248695274702 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#005a87"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
        <div className="bg-primary md:-mt-16">
          <div className="text-center text-white scroll-mt-20" id="galeri">
            <h1 className="text-5xl font-semibold mb-4 font-waterBrush">
              Galeri
            </h1>
            <p className="font-extralight mb-10">
              Sekilas foto tentang perusahaan kami.
            </p>
          </div>
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 p-5">
            <Image
              src={FotoPerusahaan}
              alt="Perusahaan"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoTampakDepan}
              alt="Tampak Depan Perusahaan"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoGudang}
              alt="Warehouse"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoCutting}
              alt="Cutting"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoHampar}
              alt="Hamparan Cutting"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoProduksi}
              alt="Ruang Sewing"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoCatokUltrasonik}
              alt="Press Ultrasonik"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoJahit}
              alt="Mesin Jahit"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoJahit2}
              alt="Mesin Jahit"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoJahitGown}
              alt="Jahit Gown"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoObras}
              alt="Mesin Obras"
              className="md:grayscale md:hover:grayscale-0"
            />
            <Image
              src={FotoUltrasonik}
              alt="Mesin Ultrasonik"
              className="md:grayscale md:hover:grayscale-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Galeri;
