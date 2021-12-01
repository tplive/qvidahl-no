import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
//import TopMenu from '../components/TopMenu'
//import ContentCards from '../components/ContentCards'
//import Quotes from '../components/Quotes'
//import ImageCarousel from '../components/ImageCarousel'
//import Card from '../components/Card'
//import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Trying out Next.js</title>
        <meta name="description" content="Trying out some Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Styrkr" subtitle="This is subtitle" />


    </div>
  )
}

export default Home
