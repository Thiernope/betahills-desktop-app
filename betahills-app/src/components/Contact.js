import React from 'react'
import Button from "./Button"
function Contact() {
    return (
        <div id="contact" className="h-screen">
            <div className = "p-28" data-aos="zoom-in">
            <h1 className="text-6xl tracking-wider"> Want to know more?<br/>
Get in touch.</h1>
            </div>
           <div data-aos="zoom-in"><Button text="Info@betahills.com"/></div>
        </div>
    )
}

export default Contact
