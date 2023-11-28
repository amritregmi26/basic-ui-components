import React from 'react'
import Header from './header'

export const Button = () => {
  return (
    <section className="container flex flex-col gap-5">
      <Header heading="Buttons" />
      <div className="ribbon-holder flex flex-col gap-5 px-4 py-3">
        <div className="ribbon flow-root">
          <button>Click Me</button>
        </div>
      </div>
    </section>

  )
}
