// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from 'react'
import ContentCard from './ContentCard'
//import Quotes from '../components/Quotes'
//import ImageCarousel from '../components/ImageCarousel'

import styles from './mainpagecontent.module.css'

//type MainPageContentProps = {
//    title: string,
//    subtitle?: string
//}

const MainPageContent: React.FC = () => {
    // Home icon
    // Blog
    // Projects
    // Images
    // About
    return (
        <div className={styles.content}>
            <ContentCard title="Kommer 'snart'">
                <h1 className={styles.bigHeading}>🚧</h1>
                <p>Det jobbes intenst med å få til noe nytt her!
                    Du kan være med å bidra hvis du vil, alle forslag tas mot med stor takk! 😍
                </p>
                <h2><a href="https://github.com/tplive/qvidahl-no">Koden ligger på Github</a></h2>
            </ContentCard>

        </div >
    )
}

export default MainPageContent