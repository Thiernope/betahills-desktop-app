import React from 'react'

function Solutions() {
    return (
        <div className = "text-blue-800">
        <div className = "bg-white pl-28 py-16">
           <div className="w-4/6 p-8">
               <h1 className ="text-6xl text-justify">Manual Testing.</h1>
           </div>

           <div className = "flex flex-col items-end">
               <p className="w-1/2 p-8 text-justify"> 
               We take the role of the user and test your products in terms of functionality, design, and usability. <br/><br/> We offer the following manual testing services for web, mobile, and desktop apps: <br/><br/>
               </p>

               <ul className ="p-12 list-disc w-1/2">
                   <li>Test plan creation </li>
                   <li>Functional testing</li>
                   <li>Regression testing</li>
                   <li>UI testing</li>
                   <li>cross-browser testing</li>
                   <li>Usability and accessibility testing</li>
                  
               </ul>
           </div>
        </div>

        <div className = "bg-white pl-28 py-16">
           <div className="w-4/6 p-8">
               <h1 className ="text-6xl text-justify">Automated Testing.</h1>
           </div>

           <div className = "flex flex-col items-end">
               <p className="w-1/2 p-8 text-justify"> 
               Save time and increase your testing coverage with automated testing.
We offer the following automated testing services for web, mobile, and desktop apps: <br/><br/>
               </p>

               <ul className ="p-12 list-disc w-1/2">
                   <li>API testing </li>
                   <li>Regression testing</li>
                   <li>Ruby, Python</li>
                   <li>UI testing</li>
                   <li>Tool selection</li>
                   <li>Review of existing automation</li>
                  
               </ul>
           </div>
        </div>

        <div className = "bg-white pl-28 py-16">
           <div className="w-4/6 p-8">
               <h1 className ="text-6xl text-justify">Performance testing.</h1>
           </div>

           <div className = "flex flex-col items-end">
               <p className="w-1/2 p-8 text-justify"> 
               Ensure customer satisfaction by guaranteeing optimal performance during standard and peak workloads. We identify key performance criteria, provide you with information about speed, stability and scalability, and determine which areas need improvement.
               </p>
           </div>
        </div>
        </div>
    )
}

export default Solutions
