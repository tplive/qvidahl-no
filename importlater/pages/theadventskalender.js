import React from "react"

import julestyle from "./theadventskalender.module.css"
import AdventsKalender from "../components/adventskalender"
import Footer from "../components/footer"

if (typeof window !== `undefined`) {
    const Snow = require("../assets/snowdrift")
}
console.log(julestyle);
export default function TheAdventsKalender() {
    return (
        <div>
            <AdventsKalender className={julestyle.content} />
            <Footer/>
        </div>
    );
}