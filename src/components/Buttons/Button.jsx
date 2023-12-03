import React from 'react'
import Header from '../Global/header'
import './singleButton.css'
import data from '../../data/btnData.json';
import ButtonContainer from './components/buttonContainer'

export const Button = () => {


  const classes =["bg-dark","bg-primary", "bg-secondary", "bg-maroon", "bg-green", "bg-yellow", "bg-purple", "bg-gray", "md:grow-0", "grow", "rounded-full", "px-8", "py-2", "text-white","hover:bg-dark", "hover:text-white", "hover:border-2", "hover:border-dark", "border-2", "transition","duration-500", "bg-none", "border-dark","border-gray", "border-maroon", "border-yellow", "border-green", "border-secondary", "border-primary", "border-purple", "text-primary", "text-secondary", "text-yellow", "text-maroon", "text-purple", "text-gray"];


  const roundedCorner = data.filter(item => item.id.includes("btnrc"));
  const roundedPill = data.filter(item => item.id.includes("btnrp"));
  const onHover = data.filter(item => item.id.includes("btnoh"));


  return (
      <section className="container flex flex-col gap-12">
        <Header heading="Buttons" />
        <div className="flex flex-col gap-8 px-4 py-3">

          <ButtonContainer name="Rounded-Corner">
            {
              roundedCorner.map(item => (
                <button key={item.id} className={item.className}>{item.text}</button>
              ))
            }
          </ButtonContainer>


          <ButtonContainer name="Rounded-Pill">
            {
              roundedPill.map(item => (
                <button key={item.id} className={item.className}>{item.text}</button>
              ))
            }
          </ButtonContainer>


          <ButtonContainer name="Mouse-over">
            {
              onHover.map(item => (
                <button key={item.id} className={item.className}>{item.text}</button>
              ))
            }
          </ButtonContainer>

        </div>
      </section>
  )
}
