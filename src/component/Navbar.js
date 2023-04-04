import React from "react";
import "../styles/index.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <button className="btnprimary">Primary</button>
          <button className="btnsecondary">Secondary</button>
          <button className="btnprimary">Self</button>
          <button className="btnsecondary">SASS</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
