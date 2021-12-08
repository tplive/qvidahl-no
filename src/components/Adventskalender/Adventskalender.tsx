// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from 'react'
import Card from '../Card/Card'
import julestyle from './Adventskalender.module.css'

type AdventskalenderProps = {
    episodes: string[]
}

const Adventskalender: React.FC<AdventskalenderProps> = ({ episodes }) => {

    let date = new Date();
    let today = date.getDate();
    var cards: Array<JSX.Element> = [];

    if (date.getMonth() === 11) {
        for (var i = 0; i < episodes.length; i++) {
            if (i < today) {
                cards.push(
                    <Card number={i + 1} url={episodes[i]} active="true" />
                );
            } else {
                cards.push(
                    <Card number={i + 1} url="" active="false" />
                );
            }
        }
    } else {
        <h1>Please come back in December</h1>
    }

    return (
        <>
            <div className={julestyle.container}>
                <div className={julestyle.gridContainer}>
                    {cards}
                </div>
                <div className={julestyle.linkspace}>
                    <ul className={julestyle.listStyle}>
                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLSu-kJ8PGdcJg0K-rhNlab5V4dQCS21QY">click here to binge all episodes</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=Dw63RZi5iPo">25 år med &quot;The Julekalender - Del 1&quot;</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=lnv8t9JsqyQ">25 år med &quot;The Julekalender - Del 2&quot;</a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Adventskalender
