import * as React from 'react'
import julestyle from './Card.module.css'

type CardProps = {
    number: number,
    url: string,
    active: 'true' | 'false'
}

const Card: React.FC<CardProps> = ({ number, url, active }) => {
    return active === "true" ? (
        <a href={url}>
            <div key={number} className={julestyle.activeCard}>
                <h1 className={julestyle.hatch}>{number}</h1>
            </div>
        </a>
    ) : (
        <div key={number} className={julestyle.inactiveCard}>
            <h1 className={julestyle.hatch}>{number}</h1>
        </div>
    )
}

export default Card
