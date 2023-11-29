import React from 'react'
import Header from '../header'
import SingleButton from './components/singleButton'

export const Button = () => {
  return (
    <section className="container flex flex-col gap-12">
      <Header heading="Buttons" />
      <div className="flex flex-col gap-10 px-4 py-3">
        <div className="flex justify-around flex-wrap gap-6"> 
          <SingleButton text="Button" className="bg-primary md:grow sm:grow px-5 py-2 rounded text-white" />
          <SingleButton text="Button" className="bg-yellow md:grow sm:grow px-5 py-2 rounded text-dark rounded" />
          <SingleButton text="Button" className="bg-secondary md:grow sm:grow rouded px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-green md:grow sm:grow rounded px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-dark md:grow sm:grow rounded px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-maroon md:grow sm:grow rounded px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-gray md:grow sm:grow rounded px-5 py-2 text-dark" />
          <SingleButton text="Button" className="bg-purple md:grow sm:grow rounded px-5 py-2 text-white" />
        </div>
        <div className="flex justify-around flex-wrap gap-6">
          <SingleButton text="Button" className="bg-purple md:grow sm:grow rounded-full px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-green md:grow sm:grow rounded-full px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-gray md:grow sm:grow rounded-full px-5 py-2 text-dark" />
          <SingleButton text="Button" className="bg-primary md:grow sm:grow rounded-full px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-maroon md:grow sm:grow rounded-full px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-dark md:grow sm:grow rounded-full px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-secondary md:grow sm:grow rounded-full px-5 py-2 text-white" />
          <SingleButton text="Button" className="bg-yellow md:grow sm:grow rounded-full px-5 py-2 text-dark" />
        </div>
        <div className="flex justify-around flex-wrap gap-6">
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-dark" />
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-maroon" />
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-purple" />
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-green" />
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-yellow" />
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-primary" />
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-secondary" />
          <SingleButton text="Button" className="bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-gray" />
        </div>
      </div>
    </section>

  )
}
