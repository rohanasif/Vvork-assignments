import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <>
      <div className="py-8 px-[0.01em]" id="projects">
        <h3 className="border-b border-[#f1f1f1] py-4 font-normal my-[10px] text-2xl">
          Projects
        </h3>
      </div>
      <div className="px-2 project-row">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className="px-2 project-row">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
};

export default Projects;
