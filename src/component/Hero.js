import React from "react";
import heroimg from "../img/hero-img.png";

const Hero = () => {
  return (
    <div className="container ">
      <div className="row d-flex ">
        <div className="col-md-12  mt-5 d-flex justify-content-center  ">
          <h1>Build Better Website With Bikin</h1>
        </div>
        <div className="col-md-12 mt-1">
          <h2>
            We are team of talanted designers making website with Bootstrap
          </h2>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button className="btn ">Get Started</button>
        </div>

        <div className="col-md-12 d-flex justify-content-center">
          <img src={heroimg} alt="image" className="img  img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
