import React from 'react'
import Button from "./Button"
function Contact() {
    return (
        <div className="h-screen">
            <div className = "p-28">
            <h1 className="text-6xl tracking-wider text-blue-900"> Want to know more?
Get in touch.</h1>
            </div>
           <div><Button text="Info@betahills.com"/></div>
        </div>
    )
}

export default Contact
