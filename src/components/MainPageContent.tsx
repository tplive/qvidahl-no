// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from 'react'
import ContentCard from './ContentCard'
//import Quotes from '../components/Quotes'
//import ImageCarousel from '../components/ImageCarousel'

import styles from './mainpagecontent.module.css'

//type MainPageContentProps = {
//    title: string,
//    subtitle?: string
//}

const MainPageContent: React.FC = () => {
    // Home icon
    // Blog
    // Projects
    // Images
    // About
    return (
        <div className={styles.content}>
            <ContentCard title="Kommer 'snart'">
                <h1 className={styles.bigHeading}>🚧 Work in progress! 🚧</h1>
                <p>
                    So this site will be a good mix of Norwegian and English, depending on my mood, I guess. Use Google Translate. 😄
                </p>
                <p>
                    "Hvorfor bruker du tid på å lage egen webside? Vi har jo sosiale medier, der kan vi publisere alt helt gratis!
                    Hvorfor gidder du?"
                </p>

                <p>Jo, det skal jeg si deg.. 😄
                    Sosiale medier, og spesielt Facebook & Co, har gjort Internett lukket, og det har de gjort med fullt overlegg, for å kontrollere
                    nettet. De samler inn data om folk "anonymt" og de selger den. Ikke navnet ditt, kontonummeret ditt eller noe
                    annet som kan identifisere <b>deg</b>, men data <b>om</b> deg, som gjør at hvem som helst som har råd til det, kan betale for å
                    vise hva de vil til nettopp <b>deg</b>.
                </p>
                <p>
                    Men hvis de ikke har navnet mitt, hvordan kan de da vite at det blir vist til nettopp <b>meg?</b>
                </p>
                <p>
                    Svaret er at de trenger ikke navnet ditt, selv om det også blir relativt enkelt å finne. De har så mye data om deg, hvem du kjenner,
                    hvilke interesser du og dine venner har, hvor og når dere oppholder dere et sted, hva som finnes på det stedet osv. osv.
                    at når du sammenstiller alt dette med andre offentlige datakilder, blir det til et veldig nøyaktig bilde av hvem
                    nettopp <b>du</b> er.
                </p>
                <p>
                    Så jeg orker ikke mer FB. Jeg har avinstallert appene fra telefonen min; Facebook, Instagram og Messenger. På den måten får de
                    i hvert fall ikke sporet meg på samme nivå som før. Jeg er innom en sjelden gang for å se om jeg har gått glipp av noe "viktig".
                    Dersom noen trenger å få tak i meg sporenstreks, må det bli gjennom andre kanaler. Det er nå heller sjelden at det skjer da.
                    Denne websiden kommer ikke til å spore deg. Den er laget helt åpent, koden ligger på Github. Den er publisert på Netlify,
                    og dersom jeg noen gang begynner å ta vare på data om brukere, feks cookies eller lager en innlogging, blir det også fullt
                    åpent og tilgjengelig.
                </p>
                <p>
                    For meg betyr det at jeg ikke vet så mye om hvem som besøker siden eller om de liker det de ser. Det er heller ikke
                    så viktig, egentlig? Dersom du vil gi meg tilbakemelding, finner du en måte å gjøre det på. Jeg er i aller høyeste grad
                    fortsatt tilgjengelig, selv om jeg ikke lar Facebook spore meg i samme grad som før. 😄
                </p>
                <h2><a href="https://github.com/tplive/qvidahl-no">Koden ligger på Github</a></h2>
            </ContentCard>

        </div >
    )
}

export default MainPageContent