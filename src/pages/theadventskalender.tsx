import * as React from 'react'
import Adventskalender from '../components/Adventskalender/Adventskalender'
import julestyle from './theadventskalender.module.css'

if (typeof window !== `undefined`) {
    //const Snow = require('../assets/snowdrift')
}
console.log(julestyle);

export default function TheAdventsKalender() {
    return (
        <>
            <div className={julestyle.content}>
                <div className="text-center">
                    <h1 className="font-cards text-white text-4xl p-6">The Adventskalender 2021</h1>
                </div>
                <div>
                    <Adventskalender />
                </div>

            </div>
        </>
    );
}