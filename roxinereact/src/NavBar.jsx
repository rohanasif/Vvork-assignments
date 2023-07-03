import React from "react";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex w-full justify-between px-12 py-6">
      <img src={logo} alt="" />
      <ul className="flex list-none w-[60%] justify-between">
        <Link to="/">HOME</Link>
        <Link to="/features">FEATURES</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/elements">ELEMENTS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/team">TEAM</Link>
        <Link to="/blog">BLOG</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
