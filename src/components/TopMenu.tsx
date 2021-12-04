// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from 'react'
import Link from 'next/link'
import { MdKeyboardBackspace } from 'react-icons/md'
import styles from './topmenu.module.css'



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
            <div className={styles.home}><Link href="/"><a><MdKeyboardBackspace /> Home</a></Link></div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.projects}>Projects</div>
            <div className={styles.images}>Images</div>
            <div className={styles.About}><Link href="/about"><a>About</a></Link></div>

        </div>
    )
}

export default Header