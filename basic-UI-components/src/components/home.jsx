import React from 'react'
import { Link } from 'react-router-dom'
import './styles/style.css'

const Home = () => {
    return (
        <div className='home'>
                <Link to="/navBar" className='link'><span>NavBar</span></Link>
                <Link to="/footer" className='link'><span>Footer</span></Link>
                <Link to="/form" className='link'><span>Form</span></Link>
                <Link to="/hero" className='link'><span>Hero</span></Link>
                <Link to="/sliderCard" className='link'><span>SliderCard</span></Link>
                <Link to="/cardHover" className='link'><span>CardHover</span></Link>
        </div>
    )
}

export default Home