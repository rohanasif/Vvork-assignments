import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link className="navitem" to="/">
        HOME
      </Link>
      <Link className="navitem" to="/projects">
        PROJECTS
      </Link>
      <Link className="navitem" to="/contact">
        CONTACT
      </Link>
    </nav>
  );
};
export default NavBar;
