import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
//import ContentCards from '../components/ContentCards'
//import Quotes from '../components/Quotes'
//import ImageCarousel from '../components/ImageCarousel'
//import Card from '../components/Card'
//import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {

  const title = "Styrkr"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Styrkr is an old norse word for 'strength'" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Header title={title} subtitle="strength in numbers" />
        <TopMenu />
        <div><h1>This is the content</h1></div>
      </body>
    </>
  )
}

export default Home
