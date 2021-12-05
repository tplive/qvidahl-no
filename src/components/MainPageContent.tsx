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
            <ContentCard title="First card">
                First Card Content
                <p>This is a paragraph of text. It will be replaced with a live data feed from some
                    source out there on the wider nets. But for now there is just a placeholder.
                </p>
            </ContentCard>
            <ContentCard title="Second card" />
            <ContentCard title="Third card" />
        </div>
    )
}

export default MainPageContent