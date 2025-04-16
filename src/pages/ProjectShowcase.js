import React from 'react';
import Navbar from '../components/layout/Navbar';
import ProjectSection from '../components/ProjectSection';
import { Footer } from '../components/Footer';
import MoveToTop from '../components/MoveToTop';

 export const ProjectShowcase = () => {
    return (
        <>
           <div className='container-fluid'>
          <Navbar/>
          <div className='' style={{marginTop:'60px'}}>
          <ProjectSection/>
          </div>
          <MoveToTop/>
          <Footer/>

          </div>
        </>
    );
}

// export default ProjectShowcase;
