import React from "react";
import logo from "./images/logo.svg";

function NavBar() {
  return (
    <nav className="flex w-full justify-between px-12 py-6">
      <img src={logo} alt="" />
      <ul className="flex list-none w-[60%] justify-between">
        <li>
          <a href="#" className="no-underline">
            HOME
          </a>
        </li>
        <li>
          <a href="#" className="no-underline">
            FEATURES
          </a>
        </li>
        <li>
          <a href="#" className="no-underline">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a href="#" className="no-underline">
            ELEMENTS
          </a>
        </li>
        <li>
          <a href="#" className="no-underline">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="no-underline">
            TEAM
          </a>
        </li>
        <li>
          <a href="#" className="no-underline">
            BLOG
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
