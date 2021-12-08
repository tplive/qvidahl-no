import * as React from 'react'
import type { NextPage } from 'next'

import Adventskalender from '../components/Adventskalender/Adventskalender'
import julestyle from './theadventskalender.module.css'

if (typeof window !== `undefined`) {
    //const Snow = require('../assets/snowdrift')
}
//console.log(julestyle);

const TheAdventskalender: NextPage = () => {
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

    return (
        <>
            <div className={julestyle.content}>
                <div className="text-center">
                    <h1 className={"font-cards p-6 " + julestyle.topHeading}>The Adventskalender 2021</h1>
                </div>
                <div>
                    <Adventskalender episodes={episodes} />
                </div>

            </div>
        </>
    );
}

export default TheAdventskalender