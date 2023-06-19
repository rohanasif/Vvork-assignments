import React from "react";
import Projects from "./Projects.jsx";
import About from "./About";
import Contact from "./Contact";
import MapSection from "./MapSection.jsx";

const Main = () => {
  return (
    <div className="max-w-[1564px] py-2 px-4 mx-auto">
      <Projects />
      <About />
      <Contact />
      <MapSection />
    </div>
  );
};

export default Main;
