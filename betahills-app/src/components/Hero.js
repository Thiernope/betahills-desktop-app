import React from 'react'
import Button from "./Button"
function Hero() {
    return (
        <div className="h-screen">
            <div className = "p-28">
            <h1 className="text-6xl tracking-wider text-blue-900"> We do software testing <br/>for flawless products. <br/>With purpose</h1>
            </div>
           <div><Button /></div>
        </div>
    )
}

export default Hero