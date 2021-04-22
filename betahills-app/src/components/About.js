import React from 'react'

function About() {
    return (
        <div id="about" className = "bg-white pl-28 py-16 text-center">
           <div className="w-4/6 p-8" data-aos="zoom-in">
               <h1 className ="text-6xl text-justify">Our expert testers <br/>handle quality assurance <br/>so you can focus on <br/>building your ideas.</h1>
           </div>

           <div className = " ml-96 pl-20" data-aos="zoom-in">
               <p className="w-3/4 p-8 text-justify text-base"> 
               Betahills was founded by Lena Simon in Berlin in 2019.
We connect European businesses with a team of female software testers in Rwanda. Our team seamlessly integrates into your existing processes at no additional cost and makes sure your solution is flawless and ready for market. Our certified testers are part of Rwanda’s first and only QA and software testing team and work together with experienced technical leads and project managers from the US, Canada and Europe. Betahills connects these female tech professionals in Rwanda with an international client base.
               </p>
           </div>
        </div>
    )
}

export default About
