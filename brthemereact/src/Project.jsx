import React from "react";
import img from "./images/house2.jpg";
const Project = () => {
  return (
    <div className="w-1/4 px-2 mb-4 float-left">
      <div className="relative">
        <div className="absolute top-0 left-0 py-2 px-4 text-white bg-black">
          Brick House
        </div>
        <img src={img} alt="House" className="w-full" />
      </div>
    </div>
  );
};

export default Project;
