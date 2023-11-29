import React from 'react'

const SingleButton = ({text, className}) => {
  return (
    <button className={`${className}`}>{text}</button>
  )
}

export default SingleButton