import React from 'react'
import { NavBar, Footer, Form, SliderCard, CardHover, Hero } from '../components'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} end />
        <Route path="/navBar" element={<NavBar />}  />
        <Route path="/footer" element={<Footer />}  />
        <Route path="/form" element={<Form />}  />
        <Route path="/hero" element={<SliderCard />}  />
        <Route path="/sliderCard" element={<CardHover />}  />
        <Route path="/cardHover" element={<Hero />}  />
    </Routes>
  )
}

export default AllRoutes