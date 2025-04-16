import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { observeIntersection } from '../utility/userInterfaceObserver'

const AboutSection = () => {
    const h1Ref =useRef(null)
    const pRef = useRef(null)
    const h2Ref = useRef(null)
    const p1Ref = useRef(null);
    const p2Ref  = useRef(null)
    const p3Ref = useRef(null)
    const p4Ref = useRef(null)
    const p5Ref  = useRef(null)


    useEffect(()=>{
        observeIntersection([h1Ref,pRef,h2Ref,p1Ref,p2Ref,p3Ref,p4Ref,p5Ref]);
    },[]);

 
    
  return (
   <>
     <div className="row text-center">

<div className='about d-flex flex-column align-items-center justify-content-center '></div>
<h1  className='header-text py-3 h1' ref={h1Ref}>Software Enginner</h1>
<div className='ptext' ref={pRef}>
<p className="about-text para-text text-lg-center">
    Hello, I’m Sweta Singh, a B.Tech student in Computer Science at Lovely Professional University, Punjab. I specialize in Full Stack Development.
</p>

<p className="about-text para-text text-lg-center">
    Originally from Nepal and now in India, I’ve completed several OJT programs, internships, and workshops during my studies, all with certificates of achievement and honoring.
</p>

<p className="about-text para-text text-lg-center">
    I excel in Full Stack web and app development, using technologies like MERN . Scroll down to see my journey.
</p>
</div>

</div>
<div className='row'>
<h1 className='header-text text-center py-3 h2' ref={h2Ref}>Software Engineer Journey</h1>
<div className='d-flex flex-lg-nowrap flex-wrap'>
    <div className='journey '>
        <div className='journey-icon '></div>

        <div className='journey-item flex item p1' ref={p1Ref}>
            <div className='d-flex w-100 flex-lg-nowrap flex-wrap'>
                <div className='journey-content flex-item w-100' style={{ borderLeft: 'none', }}>
                    <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Higher Education</h5>
                    <h6 style={{ fontFamily: "'Montserrat', sans-serif" }}>+2 (Computer Engineering) </h6>
                    <p><b>National Infotech College , Birgunj, Nepal</b></p>
                    <p>I completed my 11<sup>th</sup> and 12<sup>th</sup> grades with distinction, majoring in Science and Computer Science.
                        Additionally, I developed a mini project, applying my programming skills.</p>
                </div>
                <div className='journey-content w-100 border-none  flex-item' style={{ fontFamily: "'Roboto', sans-serif" }}>
                    <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Technologies & Projects</h5>
                    <p>C | HTML | CSS | C++ | DBMS | MySQL | Java | JavaScript | PHP</p>
                    <p><Link className='text-decoration-none' to={'https://github.com/Sweta-singh-123/Tic-tac-Toe-game'}>Tic Tac Toe(static)</Link></p>
                    <p><Link className='text-decoration-none' to={'https://github.com/Sweta-singh-123/E-commerce'}>E Commerce Website </Link></p>
                </div>
            </div>
        </div>
        {/* //Dursikshya certification */}
        

        {/* graduation */}
        <div className='journey-item flex item p3' ref={p3Ref}>
            <div className='d-flex w-100 flex-lg-nowrap flex-wrap'>
                <div className='journey-content flex-item w-100' style={{ borderLeft: 'none', }}>
                    <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}> Bachelor's Degree</h5>
                    <h6 style={{ fontFamily: "'Montserrat', sans-serif" }}>B.Tech in CSE (Computer Science & Engineering) </h6>
                    <p><b>Lovely Professional University Phagwara, Punjab,India</b></p>
                    <p>Following the completion of my OJT, I enrolled at LPU in 2022. Here, I am acquiring industry-relevant
                        skills that have deepened my focus on the technology sector. Currently, I am in my 6th semester of
                        the Bachelor's program, and the journey so far has been highly rewarding.</p>
                </div>
                <div className='journey-content w-100 border-none  flex-item' style={{ fontFamily: "'Roboto', sans-serif" }}>
                    <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Technologies & Projects</h5>
                    <p>Python DSA | C | C++ | JavaScript | Java | DBMS | OS | Linux command</p>
                    <div className='d-flex justify-content-around'>
                        <p><Link className='text-decoration-none' to={'https://github.com/Sweta-singh-123/Learning-Platform'}>Online Learning Website</Link></p>
                        <p><Link className='text-decoration-none' to={'https://github.com/Sweta-singh-123/E-commerce'}>E Commerce Website </Link></p>
                    </div>
                    {/* <h6>MOOCs Certifications</h6> */}
                    {/* <div className='d-flex flex-column flex-wrap justify-content-evenly text-decoration-none'>
                        <div className='d-flex justify-content-evenly'>
                            <p><Link to={'#'}>Gen AI</Link></p>
                            <p><Link to={'#'}>Server Side Scripting Language</Link></p>
                            <p><Link to={'#'}>Web App with AI</Link></p>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <p><Link to={'#'}>Google Cloud</Link></p>
                            <p><Link to={'#'}>Gen AI</Link></p>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <p><Link to={'#'}>Gen AI</Link></p>
                            <p><Link to={'#'}>Gen AI</Link></p>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>

        {/* summer training  */}
        <div className='journey-item flex item p4' ref={p4Ref}>
            <div className='d-flex w-100 flex-lg-nowrap flex-wrap'>
                <div className='journey-content flex-item w-100' style={{ borderLeft: 'none', }}>
                    <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Summer Training</h5>
                    <h6 style={{ fontFamily: "'Montserrat', sans-serif" }}>ED-Tech App </h6>
                    <p><b>CSE Pathshala, India</b></p>
                    <p>During my summer training, I developed an online learning platform as part of a hands-on project. The platform was designed to provide users with access to educational content, including video lectures, quizzes, and progress tracking features. I used technologies like HTML, CSS, JavaScript, and integrated backend functionality using Node.js and MongoDB. The goal was to create a user-friendly and responsive interface that allowed learners to register, log in, and explore various courses.  </p>
                </div>

                <div className='journey-content w-100 border-none  flex-item' style={{ fontFamily: "'Roboto', sans-serif" }}>
                    <h5 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Technologies & Projects</h5>
                    <p>NodeJS | ExpressJS | MongoDB Database</p>
                    <p><Link className='text-decoration-none' to={'https://github.com/Sweta-singh-123/Learning-Platform'}>( Online Learning Platform)</Link></p>
                    
                </div>
            </div>
        </div>
        ,<div className='journey-item d-flex w-50 m-auto mb-5 p5' ref={p5Ref}>
            <div className='journey-content w-100'>
                <h5><b>Current Status</b></h5>
                <p>3<sup>rd</sup> Year B.Tech CSE | Graduating 2026</p>
            </div>
        </div>


    </div>
</div>
</div>
   </>
  )
}

export default AboutSection