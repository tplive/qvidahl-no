import * as React from "react"
import { Link, PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"


interface IndexPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

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

let date: Date = new Date();
let day: Int = date.getDate();
console.log(date);
console.log(day);

var urls = [];

if (date.getMonth() == 11) {
    for (var i = 0; i < date.getDate(); i++) {
        urls.push(episodes[i]);
    }

}


export default class IndexPage extends React.Component<IndexPageProps> {

    public render() {

        return (
            <html style={{
                backgroundColor: `#D6001C`,
            }}>
                <body
                    style={{
                        margin: `50px`,
                        width: `1180px`,
                        minHeight: `100vh`,
                        overflow: `hidden`,
                        padding: `50px`,

                    }}
                >


                    <div style={{
                        textAlign: `center`,
                    }}>
                        <h1 style={{
                            color: `#FFF`,
                            textAlign: `start`
                        }}
                        >The Adventskalender 2020</h1>
                        <div style={{
                            display: "inline",
                        }}>
                            <Card number="1" url={urls[0]} />
                            <Card number="2" url={urls[1]} />
                            <Card number="3" url={urls[2]} />
                            <Card number="4" url={urls[3]} />
                            <Card number="5" url={urls[4]} />
                            <Card number="6" url={urls[5]} />
                            <Card number="7" url={urls[6]} />
                            <Card number="8" url={urls[7]} />
                            <Card number="9" url={urls[8]} />
                            <Card number="10" url={urls[9]} />
                            <Card number="11" url={urls[10]} />
                            <Card number="12" url={urls[11]} />
                            <Card number="13" url={urls[12]} />
                            <Card number="14" url={urls[13]} />
                            <Card number="15" url={urls[14]} />
                            <Card number="16" url={urls[15]} />
                            <Card number="17" url={urls[16]} />
                            <Card number="18" url={urls[17]} />
                            <Card number="19" url={urls[18]} />
                            <Card number="20" url={urls[19]} />
                            <Card number="21" url={urls[20]} />
                            <Card number="22" url={urls[21]} />
                            <Card number="23" url={urls[22]} />
                            <Card number="24" url={urls[23]} />

                        </div>
                        <div>
                            <p>
                                <a style={{
                                    color: `#FFF`,
                                    textDecoration: `none`
                                }} href="https://www.youtube.com/playlist?list=PLSu-kJ8PGdcJg0K-rhNlab5V4dQCS21QY">click here to binge all episodes</a>
                            </p>
                            <p>
                                <a style={{
                                    color: `#FFF`,
                                    textDecoration: `none`
                                }} href="https://www.youtube.com/watch?v=Dw63RZi5iPo">25 år med "The Julekalender - Del 1"</a>
                            </p>
                            <p>
                                <a style={{
                                    color: `#FFF`,
                                    textDecoration: `none`
                                }} href="https://www.youtube.com/watch?v=lnv8t9JsqyQ">25 år med "The Julekalender - Del 2"</a>
                            </p>
                        </div>
                    </div>
                </body>
            </html>
        );
    }

}
