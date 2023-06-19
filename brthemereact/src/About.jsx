import React from "react";
import AboutCard from "./AboutCard";
import img1 from "./images/team1.jpg";
import img2 from "./images/team2.jpg";
import img3 from "./images/team3.jpg";
import img4 from "./images/team4.jpg";

const About = () => {
  return (
    <>
      <div className="py-8 px-4" id="about">
        <h3 className="border-b border-[#f1f1f1] py-4 font-normal my-[10px] text-2xl">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="px-2 grayscale-[75%] contact-row">
        <AboutCard
          img={img2}
          alt="John"
          title="CEO & Founder"
          name="John Doe"
        />
        <AboutCard img={img1} alt="Jane" title="Architect" name="Jane Doe" />
        <AboutCard img={img3} alt="Mike" title="Architect" name="Mike Ross" />
        <AboutCard img={img4} alt="Dan" title="Architect" name="Dan Star" />
      </div>
    </>
  );
};
export default About;
