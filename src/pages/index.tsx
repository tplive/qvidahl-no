// Copyright 2021 The Authors. Subject to the MIT license.

import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import MainPageContent from '../components/MainPageContent'
import Footer from '../components/Footer'

import styles from './index.module.css'

const Home: NextPage = () => {

  const title = "Styrkr"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Styrkr is an old norse word for 'strength'" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <div className={styles.container}>
          <Header title={title} subtitle="strength in numbers" />
          <TopMenu />
          <MainPageContent />
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Home
