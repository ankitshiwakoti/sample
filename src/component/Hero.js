import React from "react";
import heroimg from "../img/hero-img.png";

const Hero = () => {
  return (
    <div className="container ">
      <div className="row  ">
        <div className="col-md-12  mt-5 d-flex justify-content-center align-items-center   ">
          <h1 className="text-center">Build Better Website With Bikin</h1>
        </div>
        <div className="col-md-12 mt-1 d-flex justify-content-center ">
          <h2>
            We are team of talanted designers making website with Bootstrap
          </h2>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button className="btn btn-get-started ">Get Started</button>
        </div>

        <div className="col-md-12 d-flex justify-content-center">
          <img src={heroimg} alt="image" className="img  img-fluid " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
