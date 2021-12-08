// Copyright 2021 The Authors. Subject to the MIT license.

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'
import styles from './about.module.css'

const About: NextPage = () => {

  const title = "About"
  const subtitle = "stuff"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Styrkr is an old norse word for 'strength'" />
      </Head>

      <body>
        <div className={styles.container}>
          <Header title={title} subtitle={subtitle} />
          <TopMenu />
          <div className={styles.content}>
            <div className={styles.aboutItem}>
              <h1 className={styles.title}>Interests</h1>
              <p>Snowboarding, randonèe- and alpine skiing, squash, padel, hiking, mountainbiking, geocaching, gaming</p>
            </div>
            <div className={styles.aboutItem}>
              <h1 className={styles.title}>Contact info</h1>
              <p>Thomas Qvidahl, mobile number, twitter bla bla</p>
            </div>
            <div className={styles.aboutItem}>
              <h1 className={styles.title}>Training</h1>
              <p>What is this? Classes and certifications maybe?</p>
            </div>
            <div className={styles.aboutItem}>
              <h1 className={styles.title}>Another card</h1>
              <p>This is just another card with some more information?</p>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </>
  )
}

export default About
