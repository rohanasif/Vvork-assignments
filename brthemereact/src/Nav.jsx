import React from "react";

const Nav = () => {
  return (
    <nav className="py-2 px-4 flex items-center justify-between fixed z-10 w-full bg-white">
      <a href="#home">
        <h1 className="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]">
          <b>BR</b> Architects
        </h1>
      </a>
      <div className="flex">
        <a
          href="#projects"
          className="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]"
        >
          Projects
        </a>
        <a
          href="#about"
          className="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]"
        >
          About
        </a>
        <a
          href="#contact"
          className="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
