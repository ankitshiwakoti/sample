import React from "react";

const Accordion = () => {
  return (
    <div className="container">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item pt-3" style={{ backgroundColor: "#b7baaf" }}>
          <h2
            class="accordion-header"
            id="headingOne"
            style={{ backgroundColor: "#b7baaf" }}
          >
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
            >
              {" "}
              Do I need technical knowledge to use your software product ?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body font-weight-light">
              It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the , though the transition
              does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item pt-3" style={{ backgroundColor: "#b7baaf" }}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
            >
              How secure is your platform ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body font-weight-light">
              It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the , though the transition
              does limit overflow.
            </div>
          </div>
        </div>

        <div class="accordion-item " style={{ backgroundColor: "#b7baaf" }}>
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
            >
              What payment method do you accept ?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body font-weight-light">
              It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the , though the transition
              does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={{ backgroundColor: "#b7baaf" }}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
            >
              How secure is your platform ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body font-weight-light">
              It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the , though the transition
              does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={{ backgroundColor: "#b7baaf" }}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
            >
              How secure is your platform ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body font-weight-light">
              It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the , though the transition
              does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
