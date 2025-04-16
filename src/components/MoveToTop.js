import React, { useEffect, useRef } from 'react'
import { observeIntersection } from '../utility/userInterfaceObserver';

const MoveToTop = () => {

    const moveUpRef = useRef(null);

    useEffect(() => {

        observeIntersection([moveUpRef]);
    }, []);
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            {/* arrow-up button  */}
            <div className='move-up ' ref={moveUpRef}>
                <button onClick={scrollToTop} className='btn-primary'><i className='bi bi-arrow-up'></i></button>
            </div>
        </>
    )
}

export default MoveToTop