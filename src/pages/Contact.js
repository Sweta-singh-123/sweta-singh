import React from 'react'
import Navbar from '../components/layout/Navbar'
import ContactSection from '../components/ContactSection'
import { Footer } from '../components/Footer'
import MoveToTop from '../components/MoveToTop'

export const Contact = () => {
  return (
    <>
      <div className='container-fluid' style={{overflowX:'hidden'}}>
        <Navbar/>
      <div className='' style={{marginTop:'60px'}}>
      <ContactSection/>
      </div>
      <MoveToTop/>
       <Footer/>
    
      </div>
    </>
  )
}
