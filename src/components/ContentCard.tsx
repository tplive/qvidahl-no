import * as React from 'react'
import styles from './contentcard.module.css'


type ContentCardProps = {
    title: string
}

const ContentCard: React.FC<ContentCardProps> = ({ title }) => {
    return (
        <div className={styles.cardContainer}>
            <h1>{title}</h1>
            <p>This is a paragraph of text. It will be replaced with a live data feed from some
                source out there on the wider nets. But for now there is just a placeholder.
            </p>
        </div>
    )
}

export default ContentCard