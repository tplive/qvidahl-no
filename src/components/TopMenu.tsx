import * as React from 'react'
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
            <div className={styles.home}><a href="/"><MdKeyboardBackspace /> Home</a></div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.projects}>Projects</div>
            <div className={styles.images}>Images</div>
            <div className={styles.About}>About</div>

        </div>
    )
}

export default Header