import React, { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Quote from './Quote';
import { observeIntersection } from '../utility/userInterfaceObserver';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import { Footer } from '../components/Footer';
import SkillSection from '../components/SkillSection';
import MoveToTop from '../components/MoveToTop';

const HomePage = () => {
  const introImageRef = useRef(null);
  const introTextRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef1 = useRef(null); // View CV
  const buttonRef2 = useRef(null); // View Video CV

  useEffect(() => {
    observeIntersection([
      introImageRef,
      introTextRef,
      headerRef,
      textRef,
      buttonRef1,
      buttonRef2,
    ]);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="intro">
            <div className="flex-item w-100">
              <img
                src="./images/swetaprofile.jpg"
                alt=""
                className="intro-image"
                ref={introImageRef}
              />
            </div>
            <div className="d-flex flex-column flex item w-100 h-100 p-lg-5">
              <div className="intro-text text-center" ref={introTextRef}>
                <h1 className="header-text">Sweta Singh</h1>
                <p className="text-dark font-oswald fs-5 fw-bolder animated-text">
                  Software Engineer | Full Stack Developer
                </p>
              </div>
              <div className="flex-item qot px-3">
                <Quote />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="about d-flex flex-column align-items-center justify-content-center">
            <h1 className="p-4 about-me-header header-text" ref={headerRef}>
              About Me
            </h1>
            <p
              className="about-me-text about-text para-text text-lg-center"
              ref={textRef}
            >
              Hello, I’m a MERN Stack Developer with 2 years of real-world
              experience. My focus is on building dynamic, responsive web
              applications and crafting efficient backend systems. I specialize
              in transforming user requirements into seamless, feature-rich
              applications, leveraging cutting-edge tools and frameworks like
              MongoDB, Express, React, and Node.js. Currently, I’m based in
              India, but I’m originally from Nepal. My journey began with a
              startup, where I honed my skills over the first year. Later, I
              worked on larger projects that refined my expertise in scalable
              application development and API integration. I’m passionate about
              solving complex challenges through innovative, user-centric
              software solutions.
            </p>

            {/* Button Section */}
            <div>
              {/* View CV */}
              <a
                href="https://drive.google.com/file/d/1eS5tJyN_68bh6RZCjAiteHj3-xqXvlKP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-4 m-3 about-button"
                  ref={buttonRef1}
                >
                  View CV
                </button>
              </a>

              {/* View Video CV */}
              <a
                href="https://drive.google.com/file/d/1q6tUMT8ITuA6LymgBxvUwRViGEGqr8kP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-4 m-3 about-button"
                  ref={buttonRef2}
                >
                  View Video CV
                </button>
              </a>
            </div>
          </div>
        </div>

        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <MoveToTop />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
