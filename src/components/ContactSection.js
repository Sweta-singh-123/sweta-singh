import React, { useEffect, useRef } from 'react'
import { observeIntersection } from '../utility/userInterfaceObserver';

const ContactSection = () => {
  const flexRef1 = useRef(null);
  const flexRef2 = useRef(null);

  useEffect(() => {
    observeIntersection([flexRef1, flexRef2])
  }, [])
  return (
    <>
      <div className='row overflow-hidden'>
        <h1 className='header-text text-center pt-5 pb-3'>Contact</h1>
        <div className=' d-flex  flex-wrap flex-lg-nowrap flex-bg '>
          {/* flex1  */}
          <div className='d-flex p-5 flex-item flex-column text-center align-items-center  w-100 flex1' ref={flexRef1}>
            <h2>Let's Connect</h2>
            <img src='./images/what_ask.png' className='h-80 w-50' alt='myImage' ></img>
            <div className='d-flex justify-content-end contact-icon'>
              <a id='insta' href='https://www.instagram.com/s.w.e.t.a_s.i.n.g.h12' target='_blank' rel='noopener noreferrer'><img src='./images/insta22.png' alt='insta icon'></img></a>
              <a id='linkedin' href="https://www.linkedin.com/in/sweta-singh-076093255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer'><img src='./images/linkedin1.jpg' alt='linkedin logo'></img></a>

              <a id="mail"
                href="mailto:imsweta2022@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src="./images/gmail1.png" alt="gmail-logo" />
              </a>

              <a id='github' className='light' href='https://www.github.com/Sweta-singh-123' target='_blank' rel='noopener noreferrer'> <img src='./images/github_icon1.png' alt='github logo'></img></a>
            </div>
            <div className='' style={{ fontFamily: '"Robota", sans-serif' }}>
              <h5><b>How can I help You?</b></h5>
              <p>Feel free to reach out to me via the provided profile links above.</p>
            </div>
          </div>
          {/* flex2  */}
          <div className='flex-item  p-4 w-100 h-auto flex2' ref={flexRef2}>
            <div class="p-5 card shadow-lg">
              <label for="fullname" class="form-label">Full Namel</label>
              <input type="text" class="form-control" id="fullname" placeholder="Enter Full Name" />

              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control bg-info-400 p-2" id="address" placeholder="Enter Address including country name" />

              <label for="gender" className='form-label'>Gender</label>
              <select class="form-select w-50" aria-label="gender">
                <option selected>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>

              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter Email" />

              <label for="textarea" class="form-label">Message</label>
              <textarea class="form-control" id="textarea" placeholder="Type message here" rows='3' />

              <button className='btn btn-primary mt-4' type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection