import React from "react";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/dark" Component={DarkTheme} />
        <Route path="/light" Component={LightTheme} />
      </Routes>
    </>
  );
}

export default App;
