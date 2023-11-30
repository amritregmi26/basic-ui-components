import React from 'react'
import { NavBar, Footer, Form, Button, Card, Hero, Code } from '../components'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} end />
        <Route path="/navBars" element={<NavBar />}  />
        <Route path="/footers" element={<Footer />}  />
        <Route path="/forms" element={<Form />}  />
        <Route path="/hero-sections" element={<Hero />}  />
        <Route path="/cards" element={<Card />}  />
        <Route path="/buttons" element={<Button />}  />
        <Route path='/code/:id' element={<Code />} />
    </Routes>
  )
}

export default AllRoutes