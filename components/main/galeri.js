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
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 -mb-10 sm:-mb-14 md:-mb-20"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 26.261431862155867,200.54842990874698 52.52286372431173,201.096859817494 79,194 C 105.47713627568827,186.903140182506 132.16997696490893,172.16099063877104 154,186 C 175.83002303509107,199.83900936122896 192.7972284160526,242.25917762742193 214,247 C 235.2027715839474,251.74082237257807 260.6411093708807,218.80229885154117 285,206 C 309.3588906291193,193.19770114845883 332.63833410042463,200.53162696641348 358,211 C 383.36166589957537,221.46837303358652 410.8055542274209,235.07119328280493 431,219 C 451.1944457725791,202.92880671719507 464.1394489898921,157.1835999023668 490,170 C 515.8605510101079,182.8164000976332 554.6366498130103,254.19440710772773 583,272 C 611.3633501869897,289.8055928922723 629.3139517580669,254.0387716667224 651,246 C 672.6860482419331,237.9612283332776 698.1075431547226,257.6505062253826 723,256 C 747.8924568452774,254.34949377461737 772.2558756230429,231.35920343174698 793,231 C 813.7441243769571,230.64079656825302 830.8689543531059,252.91268004762932 855,234 C 879.1310456468941,215.08731995237068 910.2683069645342,154.99007637773573 936,140 C 961.7316930354658,125.00992362226427 982.0578177887571,155.12701444142778 1009,174 C 1035.9421822112429,192.87298555857222 1069.5004218804365,200.50186585655302 1091,196 C 1112.4995781195635,191.49813414344698 1121.940494689496,174.8655221323601 1145,167 C 1168.059505310504,159.1344778676399 1204.7375993615783,160.03604561400655 1232,169 C 1259.2624006384217,177.96395438599345 1277.1091078641903,194.9902954116136 1298,198 C 1318.8908921358097,201.0097045883864 1342.8259691816597,190.00277273953895 1367,188 C 1391.1740308183403,185.99722726046105 1415.5870154091701,192.99861363023052 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#005a87"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      <section className="mx-auto bg-primary">
        <div className="text-center">
          <h1 className="text-5xl font-semibold my-2">Galeri</h1>
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
      </section>
    </>
  );
};

export default Galeri;
