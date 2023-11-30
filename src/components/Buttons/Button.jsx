import React from 'react'
import Header from '../header'
import SingleButton from './components/singleButton'
import './components/singleButton.css'
import data from '../../data/btnData.json';
import ButtonContainer from './components/buttonContainer'

export const Button = () => {

  const roundedCorner = data[0]["Rounded-Corner"];
  const roundedPill = data[0]["Rounded-Pill"];
  const onHover = data[0]["On-Hover"]

  return (
    <section className="container flex flex-col gap-12">

      <Header heading="Buttons" />

      <div className="flex flex-col gap-8 px-4 py-3">

        <ButtonContainer name="Rounded-Corner">
         { roundedCorner.map((item => (
            <SingleButton key={item.id} text={item.text} className={item.className} />
         )))
         }

        </ButtonContainer>

        <ButtonContainer name="Rounded-Pill">
         {
          roundedPill.map(item => (
            <SingleButton key={item.id} text={item.text} className={item.className} />
          ))
         }
        </ButtonContainer>

        <ButtonContainer name="Mouse-over">
          {
            onHover.map(item => (
              <SingleButton key={item.id} text={item.text} className={item.className} />
            ))
          }
          
        </ButtonContainer>
      </div>
    </section>

  )
}
