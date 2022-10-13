import Link from "next/link";
import Layout from "./components/layout";

const coba = () => {
  return (
    <div>
      <h1 className="text-2xl">Coba aja Dulu</h1>
      <Link href="/">Kembali ke semula</Link>
      <Layout />
    </div>
  );
};

export default coba;
