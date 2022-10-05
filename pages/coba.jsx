import Link from "next/link";
import Navbar from "./components/navbar";

const coba = () => {
  return (
    <div>
        <h1 className="text-2xl">Coba aja Dulu</h1>
        <Link href="/">Kembali ke semula</Link>
        <Navbar />
    </div>
  )
}

export default coba