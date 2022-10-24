import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";

import { ImHome3, ImCart, ImAddressBook } from "react-icons/im";

import LogoAtr from "../../public/ataraLogo.png";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="navbar bg-base-100 invisible md:visible fixed top-0 shadow-xl">
        <div className="flex-1">
          <Link href="/">
            <Image
              src={LogoAtr}
              alt="Logo Yeongnam"
              className="w-32 ml-5 hover:cursor-pointer p-0 hover:shadow-lg"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/">
                <a className={router.asPath == "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/produk">
                <a>
                  Produk
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/produk/coverall">
                    <a
                      className={
                        router.asPath == "/produk/coverall" ? "active" : ""
                      }
                    >
                      Coverall
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/produk/gown">
                    <a
                      className={
                        router.asPath == "/produk/gown" ? "active" : ""
                      }
                    >
                      Gown
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/kontak">
                <a className={router.asPath == "/kontak" ? "active" : ""}>
                  Kontak
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="btm-nav md:invisible">
        <Link href="/">
          <button className={router.asPath == "/" ? "active" : ""}>
            <ImHome3 className="w-5 h-5" />
            <span className="btm-nav-label">Home</span>
          </button>
        </Link>
        <Link href="/produk" scroll={false}>
          <button className={router.asPath == "/produk" ? "active" : ""}>
            <ImCart className="w-5 h-5" />
            <span className="btm-nav-label">Produk</span>
          </button>
        </Link>
        <Link href="/kontak">
          <button className={router.asPath == "/kontak" ? "active" : ""}>
            <ImAddressBook className="w-5 h-5" />
            <span className="btm-nav-label">Kontak</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
