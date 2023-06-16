import React from "react";


const Project = (props) => {
  return (
    <div className="w-1/4 px-2 mb-4 float-left">
      <div className="relative">
        <div className="absolute top-0 left-0 py-2 px-4 text-white bg-black">
          {props.title}
        </div>
        <img src={props.img} alt="House" className="w-full" />
      </div>
    </div>
  );
};

export default Project;
