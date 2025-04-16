import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Footer } from '../components/Footer'
import AboutSection from '../components/AboutSection'
import MoveToTop from '../components/MoveToTop'

const About = () => {
    return (
        <>
            <div className='container-fluid'>
                <Navbar />
             <div style={{marginTop:'60px'}}>
             <AboutSection  className=""/>
             </div>
             <MoveToTop/>
                <Footer/>
            </div>
        </>
    )
}

export default About