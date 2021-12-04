// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from 'react'
import styles from './mainpagecontent.module.css'
import ContentCard from './ContentCard'

//type HeaderProps = {
//    title: string,
//    subtitle?: string
//}

const Header: React.FC = () => {
    // Home icon
    // Blog
    // Projects
    // Images
    // About
    return (
        <div className={styles.content}>
            <div>Before content</div>
            <ContentCard title="First card" />
            <ContentCard title="Second card" />
            <ContentCard title="Third card" />
            <div>After content</div>
        </div>
    )
}

export default Header