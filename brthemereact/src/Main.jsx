import React from "react";
import Projects from "./Projects.jsx";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
  return (
    <div class="max-w-[1564px] py-2 px-4 mx-auto">
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Main;
