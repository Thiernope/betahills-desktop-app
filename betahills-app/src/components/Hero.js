import React from 'react'
import Button from "./Button"
function Hero() {
    return (
        <div id="hero" className="h-screen">
            <div className = "p-28" data-aos="zoom-in">
            <h1 className="text-6xl tracking-wider"> We do software testing <br/>for flawless products. <br/>With purpose</h1>
            </div>
           <div data-aos="fade-up"><Button text="Get in touch"/></div>
        </div>
    )
}

export default Hero
