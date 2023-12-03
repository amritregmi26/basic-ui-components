import React from 'react'
import './styles/style.css'

const Header = ({heading, subheading}) => {
  return (
    <div className="header">
        <h1>{heading}</h1>
        <p>{subheading}</p>
    </div>

  )
}

export default Header