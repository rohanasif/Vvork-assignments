import React from "react";
import NavBar from "./NavBar";
function Header() {
  return (
    <div className="header-bg">
      <div className="overlay w-full h-full">
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
