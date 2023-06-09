import React from "react";
import c1 from "../img/c1.jpg";
import c3 from "../img/c3.jpg";

const Accordion = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner mt-5" style={{ borderRadius: "20px" }}>
          <div class="carousel-item active">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/040.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/048.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/045.webp"
              class="d-block w-100 rounded"
              alt="image"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: "white", width: "40px", height: "60px" }}
        >
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
            style={{ backgroundColor: "white" }}
            width={60}
            height={40}
          >
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
        </div>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            style={{ backgroundColor: "white" }}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Accordion;
