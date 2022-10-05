import Head from 'next/head';
import Navbar from './components/navbar';
import Hero from './components/hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>YEONGNAM</title>
        <meta name="description" content="PT YEONGNAM SMD INDUSTRY" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Hero/>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
        <Navbar/>
      </main>
    </>
  )
}
