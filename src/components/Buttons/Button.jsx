import React from 'react'
import Header from '../header'
import SingleButton from './components/singleButton'
import './components/singleButton.css'

export const Button = () => {
  return (
    <section className="container flex flex-col gap-12">
      <Header heading="Buttons" />
      <div className="flex flex-col gap-10 px-4 py-3">
        <div className="flex justify-around flex-wrap gap-6">
          <SingleButton text="Button" className="bg-primary md:grow sm:grow px-5 py-2 rounded text-white" />
          <SingleButton text="Button" className="bg-yellow md:grow sm:grow px-5 py-2 rounded text-dark rounded" />
          <SingleButton text="Button" className="bg-secondary md:grow sm:grow rounded px-5 py-2 text-white" />
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
          <SingleButton text="Hover" className="hover:bg-dark hover:text-white hover:border-2 hover:border-dark transition duration-500 bg-none md:grow sm:grow rounded px-5 py-2 border-2 text-dark" />
          <SingleButton text="Left" className="slide btn-left bg-none md:grow sm:grow rounded px-5 py-2 border-2 border-maroon text-maroon" />
          <SingleButton text="Right" className="slide btn-right bg-none md:grow sm:grow rounded px-5 py-2 border-2 border-purple text-purple" />
          <SingleButton text="Top" className="slide btn-top bg-none md:grow sm:grow rounded px-5 py-2 border-2 border-green text-green" />
          <SingleButton text="Bottom" className="slide btn-bottom bg-none md:grow sm:grow rounded px-5 py-2 border-2 border-yellow text-yellow" />
          <SingleButton text="Fill" className="btn-fill bg-none md:grow sm:grow rounded px-5 py-2 border-2 border-primary text-primary" />
          <SingleButton text="Leave" className="btn-leave bg-none md:grow sm:grow rounded px-5 py-2 border-2 border-secondary text-secondary" />
          <SingleButton text="Center" className="slide btn-center bg-none md:grow sm:grow rounded px-5 py-2 border-2 border-gray text-gray" />
        </div>
      </div>
    </section>

  )
}
