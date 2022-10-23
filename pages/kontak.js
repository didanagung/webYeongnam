// import { HiLocationMarker } from "react-icons/hi";
// import { IoMailOutline } from "react-icons/io";
// import { BiPhoneCall } from "react-icons/bi";
// import { HiLocationMarker, IoMailOutline, BiPhoneCall } from "react-icons/all";
// import { HomeIcon } from "@heroicons/react/outline";
import Layout from "../components/layout";

const Kontak = () => {
  return (
    <>
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
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 w-10/12 m-auto my-7">
            <li className="w-full bg-white rounded-xl shadow-xl p-4 group hover:cursor-pointer hover:bg-teal-800 flex">
              <div className="m-auto">
                {/* <HiLocationMarker className="w-12 h-12 md:w-20 md:h-20 m-auto my-2 group-hover:text-white" /> */}
                {/* <HomeIcon className="w-14 h-14 md:w-20 md:h-20 m-auto my-2 group-hover:text-white" /> */}
                <p className="font-semibold group-hover:text-white">
                  Jalan AMD Dusun Tarikolot Kecamatan Pamulihan Kabupaten
                  Sumedang Provinsi Jawa Barat
                </p>
              </div>
            </li>
            <li className="w-full bg-white rounded-xl shadow-xl p-4 group hover:cursor-pointer hover:bg-teal-800 flex">
              <div className="m-auto">
                {/* <BiPhoneCall className="w-14 h-14 m-auto my-2 group-hover:text-white" /> */}
                <a
                  href="tel:02287914545"
                  className="font-semibold group-hover:text-white"
                >
                  (022) 87914545
                </a>
              </div>
            </li>
            <li className="w-full bg-white rounded-xl shadow-xl p-4 group hover:cursor-pointer hover:bg-teal-800 flex">
              <div className="m-auto">
                {/* <IoMailOutline className="w-14 h-14 m-auto my-2 group-hover:text-white" /> */}
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
