import React from 'react'
import Logo from "./images/Logo.png"
import { Anchor } from 'antd';
const { Link } = Anchor;
function Header() {
    const headerBorder = {
        borderBottom: "1px solid #0100CD",
    }
    return (
        <nav style = {headerBorder } className=" z-50 header px-20 py-5 flex justify-between items-center text-base sticky top-0">
            <div className ="w-40 flex justify-around items-center">
               <div className="">
                   <img src={Logo} alt="betahills logo" className="w-10"/>
               </div>
               <div className="text-lg">betahills</div>
            </div>
            <div className="w-1/2 flex justify-around text-lg">
            <Anchor className="anchor">
                <Link href="#about" title="About"/>
             </Anchor>
             <Anchor className="anchor">
             <Link href="#process" title="Process" />
             </Anchor>
        
             <Anchor className="anchor">
             <Link href="#caseStudy" title="Case Study" />
             </Anchor>
             <Anchor className="anchor">
             <Link href="#impact" title="Impact" />
             </Anchor>
             <Anchor className="anchor">
             <Link href="#contact" title="Contact" />
             </Anchor>
            </div>
        </nav>
    )
}

export default Header
