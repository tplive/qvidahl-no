import React from "react"
import Card from "../components/card"
import julestyle from "../styles/julestyle.module.css"
import Snow from "../assets/snowdrift"


// Episodes 1-24 on Youtube
var episodes = ["https://youtu.be/bFHy61erVyQ", "https://youtu.be/OaUoWeBbYAo",
    "https://youtu.be/qBegaNpUp7o", "https://youtu.be/UVPOXFnDjvM",
    "https://youtu.be/x8mrLF0c51g", "https://youtu.be/rVZoL6ZvJwk",
    "https://youtu.be/AmYTH290NBw", "https://youtu.be/EJaClOvReNI",
    "https://youtu.be/1FiTmaEcXjA", "https://youtu.be/-BzJHtks73U",
    "https://youtu.be/o-JaPAuPYok", "https://youtu.be/twO_Fej41aw",
    "https://youtu.be/Mxf7xkeouWQ", "https://youtu.be/inmhlKiKgVk",
    "https://youtu.be/5iL7SRhutjc", "https://youtu.be/M-cXa4hlojg",
    "https://youtu.be/gwcTZpBlh0M", "https://youtu.be/YQ13wk8uTgA",
    "https://youtu.be/pdvMGBXbpTw", "https://youtu.be/rng6VerxxLU",
    "https://youtu.be/pOdNde99aBw", "https://youtu.be/_wVb5OBEiBE",
    "https://youtu.be/QGqxwEGxclY", "https://youtu.be/tAf2cS_R-eM",
];

let date = new Date();
let today = date.getDate();
var cards = [];

if (date.getMonth() === 11) {
    for (var i = 0; i < episodes.length; i++) {
        if (i < today) {
            cards.push(
                <Card number={i + 1} url={episodes[i]} active="true" />
            );
            console.log(i < today);
        } else {
            cards.push(
                <Card number={i + 1} url="" active="false" />
            );
            console.log(i < today);
        }
    }
} else {

}

export default function TheAdventsKalender() {
    return (
        <div className={julestyle.content}>
            <h1 className={julestyle.mainHeader}>The Adventskalender 2020</h1>
            <div className={julestyle.container}>
                {cards}
                <div className={julestyle.linkspace}>
                    <ul className={julestyle.listStyle}>
                    <li>
                        <a href="https://www.youtube.com/playlist?list=PLSu-kJ8PGdcJg0K-rhNlab5V4dQCS21QY">click here to binge all episodes</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=Dw63RZi5iPo">25 år med "The Julekalender - Del 1"</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=lnv8t9JsqyQ">25 år med "The Julekalender - Del 2"</a>
                    </li>
                    </ul>
                </div>
            </div>

        </div>

    );
}