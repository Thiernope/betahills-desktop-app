import React from 'react'

function Button({text}) {
    return (
        <div className = "ml-96 pl-60">
            <button className = "btn py-3 px-7 border border-blue-900 hover:bg-blue-900 hover:text-white">{text}</button>
        </div>
    )
}

export default Button
