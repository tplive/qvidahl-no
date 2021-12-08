// Copyright 2021 The Authors. Subject to the MIT license.

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Footer from '../components/Footer'
import { GetSortedPostsData } from '../lib/Posts'

import 'tailwindcss/tailwind.css'
import styles from './blog.module.css'

export async function getStaticProps() {
  const allPostsData = GetSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
const Blog: NextPage = () => {

  const title = "Blog"
  const subtitle = "...a complete timeline of my life..."

  const articles = {}

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The blog is a complete timeline of my life" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <div className={styles.container}>
          <Header title={title} subtitle={subtitle} />
          <TopMenu />
          <div className={styles.content}>
            <h1>Read <Link href="posts/first-post"><a>this page</a></Link></h1>
          </div>
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Blog({ allPostsData })
