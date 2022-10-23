import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="btm-nav-label">Home</span>
          </button>
        </Link>
        <Link href="/produk" scroll={false}>
          <button className={router.asPath == "/produk" ? "active" : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="btm-nav-label">Produk</span>
          </button>
        </Link>
        <Link href="/kontak">
          <button className={router.asPath == "/kontak" ? "active" : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="btm-nav-label">Kontak</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
