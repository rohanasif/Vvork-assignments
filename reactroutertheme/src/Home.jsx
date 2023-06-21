import React from "react";
const Home = () => {
  return (
    <div className="main">
      <h1 className="main-text">Front-end Web Development</h1>
      <h2 className="main-text">Certified from Coursera, Google and Meta</h2>
      <h3 className="main-text">
        Technologies: HTML5, CSS3, JavaScript, TailwindCSS and React
      </h3>
      <div className="second">
        <div className="card">
          <i className="fa-solid fa-pen-nib"></i>
          <p>UI/UX DESIGN</p>
        </div>
        <div className="card">
          <i className="fa-solid fa-code"></i>
          <p>FRONT-END DEVELOPMENT</p>
        </div>
        <div className="card">
          <i className="fa-solid fa-vials"></i>
          <p>WEBSITE TESTING</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
