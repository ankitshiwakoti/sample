import React from "react";
import features1 from "../img/features-1.png";
import features2 from "../img/features-2.png";
import features3 from "../img/features-3.png";
import features4 from "../img/features-4.png";

const Features = () => {
  return (
    <div className="container">
      <div className="row section-title mt-5  text-center ">
        <h2> Features</h2>
        <p className="text-start">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="row mt-5 content">
        <div className="col-md-5 col-12 order-1 ">
          <img src={features1} alt="image" className="img-fluid" />
        </div>
        <div className="col-md-7 col-12 pt-4 order-2">
          <h3>
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i class="bi bi-check-lg"></i> Ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </li>
            <li>
              <i class="bi bi-check-lg"></i> Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </li>
            <li>
              <i class="bi bi-check-lg"></i> Ullam est qui quos consequatur eos
              accusamus.
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-5 content">
        <div className="col-md-7 col-12 order-md-1 order-2 pt-4 ">
          <h3>Corporis temporibus maiores provident</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
        <div className="col-md-5 col-12 order-md-2 order-1 pt-4">
          <img src={features2} alt="image" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-5 content">
        <div className="col-md-5 col-12 order-md-1 order-1  pt-4">
          <img alt="image " className="img-fluid" src={features3} />
        </div>
        <div className="col-md-7 col-12 order-md-2 order-2 pt-4">
          <h3>
            Sunt consequatur ad ut est nulla consectetur reiciendis animi
            voluptas
          </h3>
          <p>
            Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia
            minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor
            doloremque.
          </p>
          <ul>
            <li>
              {" "}
              <i class="bi bi-check-lg"></i> Ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </li>
            <li>
              {" "}
              <i class="bi bi-check-lg"></i> Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </li>
            <li>
              {" "}
              <i class="bi bi-check-lg"></i> Facilis ut et voluptatem aperiam.
              Autem soluta ad fugiat.
            </li>
          </ul>
        </div>
      </div>
      <div className="row content mt-5">
        <div className="col-md-7 col-12 pt-4 order-md-1 order-2">
          <h3>
            Quas et necessitatibus eaque impedit ipsum animi consequatur
            incidunt in
          </h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
        <div className="col-md-5 col-12 order-md-2 order-1 pt-4">
          <img alt="image" className="img-fluid" src={features4} />
        </div>
      </div>
    </div>
  );
};

export default Features;
