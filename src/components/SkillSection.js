import React, { useEffect, useRef } from "react";
import "../css/SkillSection.css";
import { observeIntersection } from "../utility/userInterfaceObserver";

const skills = [
  { name: "JavaScript", percentage: 90, pic:'./images/js.png' },
  { name: "Reactjs", percentage: 75, pic:'./images/react.png'},
  { name: "Nodejs", percentage: 70, pic:'images/nodejs.png'},
  { name: "MongoDB", percentage: 70, pic:'images/mongodb.png'},
  { name: "HTML/CSS", percentage: 95, pic:'images/html.png' },
  { name: "Bootstrap", percentage: 95, pic:'images/bootstrap.png' },
  { name: "C/C++", percentage: 90, pic:'images/cpp.png' },
  { name: "JAVA", percentage: 65, pic:'images/java.png' },
  { name: "DSA", percentage: 80, pic:'images/dsa.png' },
  { name: "Dart/Flutter", percentage: 85, pic:'images/flutter.png'},
  { name: "Android App Development", percentage: 80, pic:'images/android.png'},
  { name: "Firebase", percentage: 85, pic:'images/firebase.png'},
  { name: "API Integration", percentage: 75, pic:'images/api.png' },
];

const SkillSection = () => {
    
    const skillRef = useRef(null)
    const skillHeaderRef = useRef(null)
    
    useEffect(()=>{
        observeIntersection([skillRef,skillHeaderRef])
    },[]);
  return (
<>
<div className="skill-section container my-3">
      <div className="row skill"  ref={skillRef}>
        <h1 className="header-text text-center">Skills</h1>
        {skills.map((skill, index) => (
          <div className=" col-md-6 d-flex justify-content-start align-items-center " key={index}>
            <img className="" src={`${skill.pic}`} alt="course-logo" height={'60px'} width={'60px'} />
            <div className="skill-item w-100">
              <div className="d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.percentage}%` }}
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default SkillSection;
