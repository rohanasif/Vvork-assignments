import React from "react";
import { Link } from "react-router-dom";
import DarkButton from "./DarkButton";
import LightButton from "./LightButton";

function Nav() {
  return (
    <div className="flex justify-around items-center h-screen">
      <Link to="/dark">
        <DarkButton />
      </Link>
      <Link to="/light">
        <LightButton />
      </Link>
    </div>
  );
}

export default Nav;
