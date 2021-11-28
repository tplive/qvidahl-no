import * as React from 'react'
import Card from '../Card/Card'
import julestyle from 'Adventskalender.module.css'

console.log(julestyle);

var skomakergata = [
    "https://youtu.be/XvB-cf2g2Zw", "https://youtu.be/5k21zKOJNCU",
    "https://youtu.be/K1dkuYYe7xk", "https://youtu.be/xinpW9k26qo",
    "https://youtu.be/vEW6JaV9ky0", "https://youtu.be/jyNvAanHt1M",
    "https://youtu.be/FABLteuq7Y4", "https://youtu.be/b1-pToNRh60",
    "https://youtu.be/Z8tcr6kFAZQ", "https://youtu.be/iNP7Yiuba0k",
    "https://youtu.be/Oyph01G_yGs", "https://youtu.be/IFZNCsVDGo4",
    "https://youtu.be/elwVaH_IBbc", "https://youtu.be/LO5Y4wiCu-Y",
    "https://youtu.be/7EKIhCk5u_0", "https://youtu.be/6NnKk5p_HOg",
    "https://youtu.be/16ULOYIRxyw", "https://youtu.be/m8GTaKlat-I",
    "https://youtu.be/5nE0Zn2Et94", "https://youtu.be/1opSFU3C27I",
    "https://youtu.be/mWZ80uuAmgs", "https://youtu.be/Y-l_0POyEBg",
    "https://youtu.be/HgraVecKNRk", "https://youtu.be/-wK27zOA5gA",
];

// Episodes 1-24 of The Julekalender on Youtube
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
    <h1>Come back in December</h1>
}

export default function Adventskalender() {
    return (
        <div className={julestyle.content}>
            <div className={julestyle.gridContainer}>
                <h1 className={julestyle.mainHeader}>The Adventskalender 2020</h1>
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
            <iframe title="soundcloud" height="130" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367845692&color=%23960014&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div className={julestyle.soundcloud}>
                <a href="https://soundcloud.com/akirathedon" title="AKIRA THE DON" target="_blank" rel="noreferrer">AKIRA THE DON</a> ·
                <a href="https://soundcloud.com/akirathedon/lofi-christmas" title="ＬＯＦＩ  ＣＨＲＩＳＴＭＡＳ   ❄️❄️❄️" target="_blank" rel="noreferrer">ＬＯＦＩ  ＣＨＲＩＳＴＭＡＳ   <span role="img" aria-label="snowflakes">❄️❄️❄️</span></a>
            </div>
        </div>

    );
}