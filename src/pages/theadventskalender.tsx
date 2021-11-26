import * as React from "react"

import julestyle from "./theadventskalender.module.css"
import AdventsKalender from "../components/adventskalender"
import Footer from "../components/Footer/Footer"

if (typeof window !== `undefined`) {
    const Snow = require("../assets/snowdrift")
}
console.log(julestyle);
export default function TheAdventsKalender() {
    return (
        <div>
            <div className={julestyle.content}>
                <AdventsKalender />
            </div>
            <Footer/>
        </div>
    );
}