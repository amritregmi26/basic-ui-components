import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../data/btnData.json'

export const Code = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const roundedCorner = data[0]["Rounded-Corner"];

  const clickedBtn = roundedCorner.filter(item => item.id === id)

  const navigateBack = () => {
    navigate("/")
  }


  return (
    <div className="px-10 py-8">
      
      <h1 className="w-full text-left font-bold text-2xl mb-2"> HTML </h1>
      <div className="bg-primary/40 px-7 py-8 w-2/3 rounded border-2 border-primary/50">
        <p>
          {clickedBtn.html}
        </p>
      </div>

      <h1 className="w-100 text-left font-bold text-2xl mb-2 mt-10"> CSS </h1>
      <div className="bg-primary/40 px-7 py-8 w-2/3 rounded border-2 border-primary/50">
        <p>
        {clickedBtn.css}
        </p>
      </div>

      <button onClick={() => navigateBack()} className="bg-[#000] font-bold px-5 py-2 text-white rounded mt-4"> Back to Home </button>
    </div>
  )
}