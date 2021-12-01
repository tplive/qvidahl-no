import * as React from 'react'
import styles from './header.module.css'


type HeaderProps = {
    title: string,
    subtitle?: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    // Header image, full width
    // Heading goth font
    // Blurred text behind
    // Drop shadow top 5px
    return (
        <>
            <div className="flex w-80 h-8">
                <div className="flex justify-center items-center h-screen">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
        </>
    )
}

export default Header