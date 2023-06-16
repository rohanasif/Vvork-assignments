import React from "react";
import Project from "./Project";
import img2 from "./images/house2.jpg";
import img3 from "./images/house3.jpg";
import img4 from "./images/house4.jpg";
import img5 from "./images/house5.jpg";

const Projects = () => {
  return (
    <>
      <div className="py-8 px-[0.01em]" id="projects">
        <h3 className="border-b border-[#f1f1f1] py-4 font-normal my-[10px] text-2xl">
          Projects
        </h3>
      </div>
      <div className="px-2 project-row">
        <Project img={img5} title="Summer House" />
        <Project img={img2} title="Brick House" />
        <Project img={img3} title="Renovated" />
        <Project img={img4} title="Barn House" />
      </div>
      <div className="px-2 project-row">
        <Project img={img2} title="Summer House" />
        <Project img={img5} title="Brick House" />
        <Project img={img4} title="Renovated" />
        <Project img={img3} title="Barn House" />
      </div>
    </>
  );
};

export default Projects;
