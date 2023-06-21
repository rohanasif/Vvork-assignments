import React from "react";

const Contact = () => {
  return (
    <>
      <div className="main">
        <h1 className="main-text">CONTACT FORM</h1>
        <div className="second form">
          <input type="text" placeholder="Enter FullName" required />
          <input type="email" placeholder="Enter Email" required />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
