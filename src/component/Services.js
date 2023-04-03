import React from "react";

const Services = () => {
  return (
    <div className="container">
      <div className="row section-title d-flex justify-content-center text-center pt-5 align-items-center">
        <h2 className="">Services</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div class="row pt-5">
        <div class="col-md-6 col-lg-3 d-flex  mb-5 mb-lg-0">
          <div class="icon-box">
            <div class="icon">
              <i class="bi bi-dribbble"></i>
            </div>
            <h4 class="title pt-4">
              <a href="">Lorem Ipsum</a>
            </h4>
            <p class="description">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="icon-box">
            <div class="icon">
              <i class="bi bi-file-earmark-break"></i>
            </div>
            <h4 class="title pt-4">
              <a href="">Sed ut perspiciatis</a>
            </h4>
            <p class="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="icon-box">
            <div class="icon">
              <i class="bi bi-speedometer2"></i>
            </div>
            <h4 class="title pt-4">
              <a href="">Magni Dolores</a>
            </h4>
            <p class="description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>
          </div>
        </div>

        <div
          class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="icon-box">
            <div class="icon">
              <i class="bi bi-layers"></i>
            </div>
            <h4 class="title pt-4">
              <a href="">Nemo Enim</a>
            </h4>
            <p class="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
