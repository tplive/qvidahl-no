import * as React from 'react'
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
            <p>HOME | Blog | Projects | Images | About</p>
        </div>
    )
}

export default Header