import React from 'react'
import CoffeeCircle from "./images/Coffee.png"
import Coformatique from "./images/Coformatique.png"
import GlobalExecel from "./images/GlobalExecel.png"
import Global from "./images/Global.png"
import Jibu from "./images/Jibu.png"
import Dalia from "./images/Dalia.png"
function CaseStudy() {
    return (
        <div className = "process pl-28 py-16 text-blue-800">
        <div className="w-4/6 p-8">
            <h1 className ="text-6xl text-justify">We have successfully partnered with a variety of companies from all over the world.</h1>
        </div>

        <div className = "flex justify-end">
            <div className="w-2/4 p-8 grid grid-cols-3 gap-14"> 
            <img src={CoffeeCircle} alt="cofeeCircle" className="w-20 h-20"/>
            <img src={Global} alt="global" className="w-30 h-20"/>
            <img src={Jibu} alt="Jibu" className="w-20 h-20"/>
            <img src={GlobalExecel} alt="GlobalExecel" className="w-20 h-20"/>
            <img src={Dalia} alt="Dalia" className="w-20 h-20"/>
            <img src={Coformatique} alt="coformatique" className="w-20 h-20"/>
            </div>
        </div>
     </div>
    )
}

export default CaseStudy
