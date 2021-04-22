import React from 'react'

function Footer() {
    return (
        <div className="bg-blue-800 text-gray-200 flex justify-between px-16 py-8 items-center">
           <div className="flex justify-between w-96">
            <p>Musterstraße 12 <br/>
              12345 Berlin</p>
            <p>info@betahills.com <br/>
               +49(0) 151 100 321</p>
           </div>
           <div>
               <p>© 2020 betahills <br/>
                Imprint / Privacy</p>
           </div>
        </div>
    )
}

export default Footer
