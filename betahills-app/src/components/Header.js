import React from 'react'
import Logo from "./images/Logo.png"
import { Link } from "react-router-dom"
function Header() {
    const headerBorder = {
        borderBottom: "1px solid #0100CD",
    }
    return (
        <nav style = {headerBorder } className=" header px-20 py-5 bg-transparent flex justify-between items-center text-base sticky top-0">
            <div className ="w-40 flex justify-around items-center">
               <div className="">
                   <img src={Logo} alt="betahills logo" className="w-10"/>
               </div>
               <div className="text-lg text-blue-900">betahills</div>
            </div>
            <div className="w-1/2 flex justify-around text-lg text-blue-900">
                <Link to ="">
                    About
                </Link>
                <Link to ="">
                    Process
                </Link>
                <Link to ="">
                    Solutions
                </Link>

                <Link to ="">
                    Case Studies
                </Link>
                <Link to ="">
                    Impact
                </Link>

                <Link to ="">
                    Contact
                </Link>
                </div>
        </nav>
    )
}

export default Header
