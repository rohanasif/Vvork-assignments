import React from "react";
import headerimg from "./images/architect.jpg";

const Header = () => {
  return (
    <header class="relative max-w-[1500px] mx-auto" id="home">
      <img
        class="w3-image"
        src={headerimg}
        alt="Architecture"
        width="1500"
        height="800"
      />
      <div class="mt-[16px] text-center absolute top-1/2 left-1/2 tracking-[4px]">
        <h1 class="header-h1 text-[36px] text-white font-normal">
          <span class="py-2 px-4 bg-black text-white opacity-75">
            <b>BR</b>
          </span>{" "}
          <span class="text-[#f1f1f1]">Architects</span>
        </h1>
      </div>
    </header>
  );
};
export default Header;
