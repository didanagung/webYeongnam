import Image from "next/future/image";
import Link from "next/link";
import LogoAtr from "../../../public/ataraLogo.png";
const Footer = () => {
  return (
    <>
      <footer
        className="footer footer-center p-10 bg-gray-300 mb-16 md:mb-0"
        id="footer"
      >
        <div>
          <Image src={LogoAtr} className="inline-block fill-current w-44" />
          <p className="font-bold">
            PT. ATARA CIPTA MEDIKA <br />
            Berdiri Sejak 2020
          </p>
          <p>
            Dibuat dan Dipublikasi oleh
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            >
              ujangBedil
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
