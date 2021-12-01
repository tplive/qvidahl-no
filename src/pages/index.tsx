import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
//import TopMenu from '../components/TopMenu'
//import ContentCards from '../components/ContentCards'
//import Quotes from '../components/Quotes'
//import ImageCarousel from '../components/ImageCarousel'
//import Card from '../components/Card'
//import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-green-600">
        <Head>
          <title>Styrkr</title>
          <meta name="description" content="Styrkr is an old norse word for 'strength'" />
          <link rel="icon" href="/assets/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Header title="Styrkr" subtitle="This is subtitle" />
        </body>

      </div>
    </>
  )
}

export default Home
