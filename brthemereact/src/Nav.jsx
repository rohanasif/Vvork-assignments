import React from "react";

const Nav = () => {
  return (
    <nav class="py-2 px-4 flex items-center justify-between">
      <a href="#home">
        <h1 class="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]">
          <b>BR</b> Architects
        </h1>
      </a>
      <ul class="flex">
        <li class="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]">
          Projects
        </li>
        <li class="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]">
          About
        </li>
        <li class="py-2 px-4 tracking-[4px] text-[15px] hover:bg-[#ccc]">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
