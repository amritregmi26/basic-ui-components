import React from 'react'

const ButtonContainer = ({ children, name }) => {
    return (
        <>
            <h1 className="font-bold text-2xl w-100 text-left">{name}</h1>
            <div className="flex lg:justify-between px-3 flex-wrap gap-3 bg-green/20 border-2 border-green/30 rounded py-6">
                {children}
            </div>
        </>
    )
}

export default ButtonContainer