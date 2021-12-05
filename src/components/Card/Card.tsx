// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from 'react'
import julestyle from './Card.module.css'
import 'tailwindcss/tailwind.css'


type CardProps = {
    number: number,
    url: string,
    active: 'true' | 'false'
}

const Card: React.FC<CardProps> = ({ number, url, active }) => {
    return active === "true" ? (
        <div key={number} className={julestyle.active_card}>
            <a href={url}>
                <div className="text-3xl font-cards">
                    <h1 className="p-4">{number}</h1>
                </div>
            </a >
        </div >
    ) : (
        <div className={julestyle.inactive_card}>
            <div key={number} className="text-3xl font-cards">
                <h1 className="p-4">{number}</h1>
            </div>
        </div >
    )

}

export default Card
