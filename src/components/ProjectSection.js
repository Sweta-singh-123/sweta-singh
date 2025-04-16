import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { observeIntersection } from '../utility/userInterfaceObserver';

 export const ProjectSection = () => {
    const timelineRef1 = useRef(null);
    const timelineRef2 = useRef(null);
    const timelineRef3 = useRef(null);
    const timelineRef4 = useRef(null);

    useEffect(()=>{
        observeIntersection([timelineRef1,timelineRef2,timelineRef3,timelineRef4]);
    },[])
    return (
        <>
           {/* <div className='container-fluid'> */}
           <div className='row'>
            <h2 className='text-center mt-3 p-3 header-text'>Project Showcase</h2>
                <div className='timeline-container d-flex flex-md-nowrap '>
                    <div className='timeline flex-item '>
                        <div className='timeline-item' ref={timelineRef1}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2022 Jul - 2022 Dec</h4>
                                <h5>MERN Stack Development</h5>
                                <p>
                                In my experience with MERN development, I've bulit complete <Link to={'https://github.com/Sweta-singh-123/E-commerce'}><b>E-commerce</b></Link> website where  I’ve implemented key 
                                features like efficient state management, seamless API and Payment integration, and optimized database queries.  It provides features like product listings, shopping carts, secure payment gateways, user accounts, and order tracking.
                                </p>
                            </div>
                        </div>
                        <div className='timeline-item'  ref={timelineRef2}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2023 Jan - 2023 Mar</h4>
                                <h5>Tic Tac Toe</h5>
                                
                                <p>
                                Tic Tac Toe, also known as Noughts and Crosses, is a simple two-player game played on a 3×3 grid. One player uses "X" and the other uses "O".  <Link 
                                    to={'https://github.com/Sweta-singh-123/Tic-tac-Toe-game'}><b>(Game)</b></Link>  Players take turns marking a square on the grid, aiming to place three of their marks in a horizontal, vertical, or diagonal row. 
                                     </p>
                            </div>
                        </div>
                    </div>
                    <div className='timeline flex-item' >
                        <div className='timeline-item'  ref={timelineRef3}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                                <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2024 Jun - 2024 Aug</h4>
                                <h5>Online Learning Platform</h5>
                                <Link to={'https://github.com/Sweta-singh-123/Learning-Platform'} ><h6>Edtech App</h6></Link>
                                <p>
                                Online learning platform is a digital space that provides learners with access to educational content anytime, anywhere. It offers a wide range of courses, from academic subjects to professional skills, often including videos, quizzes, and interactive tools.
                                </p>
                            </div>
                        </div>
                        <div className='timeline-item'  ref={timelineRef4}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2023 Nov - 2024 May</h4>
                                <h5>Rock, Paper, Scissors</h5>
                                <Link to={'https://github.com/Sweta-singh-123/Rock-Scissor-Paper'}><h6>Game</h6></Link>
                                <p>
                                Rock, Paper, Scissors is a classic hand game usually played between two people. Each player simultaneously forms one of three shapes with their hand: rock (a fist), paper (an open hand), or scissors (a fist with the index and middle fingers extended). The rules are simple: rock beats scissors, scissors beats paper, and paper beats rock.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* </div> */}
        </>
    );
}

export default ProjectSection;
