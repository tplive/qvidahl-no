// Copyright 2021 The Authors. Subject to the MIT license.

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Footer from '../components/Footer'

import 'tailwindcss/tailwind.css'
import styles from './blog.module.css'

const Blog: NextPage = () => {

  const title = "Blog"
  const subtitle = "...a complete timeline of my life..."

  const articles = {}

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The blog is a complete timeline of my life" />
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

export default Blog
