import React from "react";
import img1 from "./images/1.PNG";
import img2 from "./images/2.PNG";
import img3 from "./images/3.PNG";

const Projects = () => {
  return (
    <>
      <div className="main">
        <h1 className="main-text">PROJECTS</h1>
        <div className="third">
          <div className="project">
            <img src={img1} alt="" className="project-img" />
            <p>HTML/CSS Project</p>
          </div>
          <div className="project">
            <img src={img2} alt="" className="project-img" />
            <p>Javascript Project</p>
          </div>
          <div className="project">
            <img src={img3} alt="" className="project-img" />
            <p>React Project</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
