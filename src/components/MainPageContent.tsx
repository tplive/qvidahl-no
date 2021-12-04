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
            <ContentCard title="First card" />
            <ContentCard title="Second card" />
            <ContentCard title="Third card" />
        </div>
    )
}

export default MainPageContent