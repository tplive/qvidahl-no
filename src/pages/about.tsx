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
              <h1 className={styles.title}>Contact info</h1>
              <p>So my name is Thomas Qvidahl. I'm not a big fan of Facebook, due to recent developments and revelations, but I do have a presence there.</p>
              <p><a href="https://www.linkedin.com/in/qvidahl/">LinkedIn</a> is where grown-up Thomas lives. Feel free to connect for any professional reason.</p>
              <p>Telegram and Signal are two other apps I frequently use.</p>
              <p>To get in touch via Signal, click or scan the QR-code:</p>
              <p><a href="https://signal.group/#CjQKIGB9d2jqgUjTaz5YKzRiSrNtinKRDTcel4w0-3UOjtkTEhBjNyWtk19uLPFCdt-0hUWo"><Image width={100} height={100} alt="QR code" src="/images/signal-group-code.png" /></a></p>

              <p>If you're into PGP, here is my public key:</p>
              <code>
                -----BEGIN PGP PUBLIC KEY BLOCK-----

                mDMEYJuXbRYJKwYBBAHaRw8BAQdAAZac9jrkC71MylHWxyKfnU1EsN3RbMJZWk1R
                hm361Wu0IlRob21hcyBRdmlkYWhsIDx0aG9tYXNAcXZpZGFobC5ubz6IlAQTFgoA
                PBYhBA3U4B2ypLy36lA3rYaVBb/jlC/OBQJgm5dtAhsDBQsJCAcCAyICAQYVCgkI
                CwIEFgIDAQIeBwIXgAAKCRCGlQW/45QvzqO3AP4m+pBi806bdrrQr/qG1WU6GaaK
                VWWXoVVhOZY4evub3QEArGBxAGEQuGjuQxrzZvILVTnj7uyUn1nH3Jc8vJx5mwy4
                OARgm5dtEgorBgEEAZdVAQUBAQdAqW4SDPumsZvIE1Kat39R+t2hX5nyxD9x/Aqq
                4nSeKB0DAQgHiHgEGBYKACAWIQQN1OAdsqS8t+pQN62GlQW/45QvzgUCYJuXbQIb
                DAAKCRCGlQW/45QvznibAQCd2FIDU7cb/SN0WZE59952PHXDP3Xgqk49He4s6zBh
                fgEAjbWeF80Ut6ifNyXT0AzJ0md66zAaObSpt/tgmhmdagg=
                =ZY8U
                -----END PGP PUBLIC KEY BLOCK-----
              </code>
            </div>
            <div className={styles.aboutItem}>
              <h1 className={styles.title}>Professional Interests</h1>
              <p>Cloud Architecture, Cloud Native development, Mobile app development, technology management</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <h1 className={styles.title}>Personal Interests</h1>
            <p>Snowboarding, randonèe- and alpine skiing, squash, padel, hiking, mountainbiking, geocaching, gaming, software craftsmanship</p>
          </div>

          <Footer />
        </div>
      </body>
    </>
  )
}

export default About
