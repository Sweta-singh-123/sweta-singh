import React, { useEffect, useRef } from 'react';
import { observeIntersection } from '../utility/userInterfaceObserver';

export const Footer = () => {
  const detailRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(()=>{
    observeIntersection([detailRef,iconRef])
  },[])
  return (
    <>
      <div className="b-example-divider"></div>
      <div className="row">
        <footer className="d-flex flex-lg-nowrap flex-wrap justify-content-center custom-footer-bg w-100 align-items-center py-2 px-5 mt-1 border-top">
          <div className="col-md-4 d-flex flex-item flex-column align-items-center lh-sm footer-details" ref={detailRef}>
            <h5>Sweta Singh</h5>
            <p className='m-0'>imsweta2022@gmail.com</p>
            <p className='m-1'>+91 123456777</p>
          </div>


          <ul className="nav flex-item col-md-4 justify-content-end align-items-center list-unstyled d-flex fs-5 icon-list" ref={iconRef}>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.linkedin.com/in/sweta-singh-076093255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://github.com/Sweta-singh-123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.instagram.com/s.w.e.t.a_s.i.n.g.h12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
           
          </ul>
        </footer>
      </div>
    </>
  );
};
