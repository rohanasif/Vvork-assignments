import React from "react";
import headerimg from "./images/architect.jpg";

const Header = () => {
  return (
    <header className="relative max-w-[1500px] mx-auto" id="home">
      <img
        className="w3-image"
        src={headerimg}
        alt="Architecture"
        width="1500"
        height="800"
      />
      <div className="mt-[16px] text-center absolute top-1/2 left-1/2 tracking-[4px]">
        <h1 className="header-h1 text-[36px] text-white font-normal">
          <span className="py-2 px-4 bg-black text-white opacity-75">
            <b>BR</b>
          </span>{" "}
          <span className="text-[#f1f1f1]">Architects</span>
        </h1>
      </div>
    </header>
  );
};
export default Header;
