// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from 'react'
import styles from './footer.module.css'


//type FooterProps = {
//    title: string,
//    subtitle?: string
//}

const Footer: React.FC = () => {
    return (

        <div className={styles.content}>
            <div><p>Footer: Copyright Thomas Qvidahl 2021</p></div>
            <div><p>Sitemap</p></div>
            <div><p>Other</p></div>
        </div >
    )
}

export default Footer