import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import './styles/style.css'

const Home = () => {
    return (
        <>
            <Header heading="UI Components" subheading="UI Components created using React JS and TailwindCSS"/>
            <div className='home'>
                <Link to="/navBars" className='link'><span>Navbars</span></Link>
                <Link to="/footers" className='link'><span>Footers</span></Link>
                <Link to="/forms" className='link'><span>Forms</span></Link>
                <Link to="/hero-sections" className='link'><span>Hero</span></Link>
                <Link to="/cards" className='link'><span>Cards</span></Link>
                <Link to="/buttons" className='link'><span>Buttons</span></Link>
            </div>
        </>
    )
}

export default Home