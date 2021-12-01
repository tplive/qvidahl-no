import * as React from 'react'
// later import Adventskalender from '../components/Adventskalender/Adventskalender'


import julestyle from './theadventskalender.module.css'

if (typeof window !== `undefined`) {
    const Snow = require('../assets/snowdrift')
}
console.log(julestyle);

export default function TheAdventsKalender() {
    return (
        <div>
            <div className={julestyle.content}>
                
            </div>
            
        </div>
    );
}