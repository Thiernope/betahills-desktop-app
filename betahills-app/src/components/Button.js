import React from 'react'

function Button({text}) {
    return (
        <div className = "flex justify-center ml-80">
            <button className = "py-3 px-7 border border-blue-900 hover:bg-blue-900 text-blue-800 hover:text-white">{text}</button>
        </div>
    )
}

export default Button
