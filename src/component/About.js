import React from "react";

const About = () => {
  return (
    <div className="container content">
      <div className="row ">
        <div className="col-lg-6 col-12 ">
          <h3> Voluptatem dignissimos provident quasi</h3>

          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>

          <button className="about-btn border-0">
            About us <i class="bi bi-chevron-right"></i>{" "}
          </button>
        </div>
        <div className="col-lg-6 col-12  icon-boxes">
          <div className=" row  ">
            <div className="col-md-6  icon-box ">
              <i class="bi bi-receipt"></i>
              <h4>Corporis voluptates sit</h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div className="col-md-6  icon-box">
              <i class="bi bi-box"></i>
              <h4>Ullamco laboris nisi</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6  icon-box ">
              <i class="bi bi-receipt"></i>
              <h4>Corporis voluptates sit</h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div className="col-md-6 icon-box">
              <i class="bi bi-box"></i>
              <h4>Ullamco laboris nisi</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
