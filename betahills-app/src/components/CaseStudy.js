import React from 'react'
import CoffeeCircle from "./images/Coffee.png"
import Coformatique from "./images/Coformatique.png"
import GlobalExecel from "./images/GlobalExecel.png"
import Global from "./images/Global.png"
import Jibu from "./images/Jibu.png"
import Dalia from "./images/Dalia.png"
//import { Parallax } from "react-parallax"
function CaseStudy() {
    return (
        <div id = "caseStudy" blur={{min:-1, max:100}}className = "process pl-28 py-16">
        <div className="w-1/2 p-8" data-aos="zoom-in">
            <h1 className ="text-6xl text-justify">We have successfully partnered with a variety of companies from all over the world.</h1>
        </div>

        <div className = "flex justify-end">
            <div className="w-3/4 p-8 grid grid-cols-3 gap-14" data-aos="zoom-in"> 
            <img src={CoffeeCircle} alt="cofeeCircle" className="w-20 h-20"/>
            <img src={Global} alt="global" className="w-30 h-20"/>
            <img src={Jibu} alt="Jibu" className="w-20 h-20"/>
            <img src={GlobalExecel} alt="GlobalExecel" className="w-20 h-20"/>
            <img src={Dalia} alt="Dalia" className="w-30 h-20"/>
            <img src={Coformatique} alt="coformatique" className="w-30 h-20"/>
            </div>
        </div>
     </div>
    )
}

export default CaseStudy
