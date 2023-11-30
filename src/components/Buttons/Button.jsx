import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
import './singleButton.css'
import data from '../../data/btnData.json';
import ButtonContainer from './components/buttonContainer'

export const Button = () => {

  const navigate = useNavigate();

  const classes =["bg-dark","bg-primary", "bg-secondary", "bg-maroon", "bg-green", "bg-yellow", "bg-purple", "bg-gray", "md:grow-0", "grow", "rounded-full", "px-8", "py-2", "text-white","hover:bg-dark", "hover:text-white", "hover:border-2", "hover:border-dark", "border-2", "transition","duration-500", "bg-none", "border-dark","border-gray", "border-maroon", "border-yellow", "border-green", "border-secondary", "border-primary", "border-purple", "text-primary", "text-secondary", "text-yellow", "text-maroon", "text-purple", "text-gray"];

  const roundedCorner = data[0]["Rounded-Corner"];
  const roundedPill = data[0]["Rounded-Pill"];
  const onHover = data[0]["On-Hover"];

  const showCode = (id) => {
    navigate(`/code/${id}`)
  }

  return (
      <section className="container flex flex-col gap-12">
        <Header heading="Buttons" />
        <div className="flex flex-col gap-8 px-4 py-3">

          <ButtonContainer name="Rounded-Corner">
            {
              roundedCorner.map(item => (
                <button onClick={() => showCode(item.id)} key={item.id} className={item.className}>{item.text}</button>
              ))
            }
          </ButtonContainer>


          <ButtonContainer name="Rounded-Pill">
            {
              roundedPill.map(item => (
                <button onClick={() => showCode(item.id)} key={item.id} className={item.className}>{item.text}</button>
              ))
            }
          </ButtonContainer>


          <ButtonContainer name="Mouse-over">
            {
              onHover.map(item => (
                <button onClick={() => showCode(item.id)} key={item.id} className={item.className}>{item.text}</button>
              ))
            }
          </ButtonContainer>

        </div>
      </section>
  )
}
