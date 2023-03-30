import React from "react";
import client1 from "../img/clients/client-1.png";
import client2 from "../img/clients/client-2.png";
import client3 from "../img/clients/client-3.png";
import client4 from "../img/clients/client-4.png";
import client5 from "../img/clients/client-5.png";
import client6 from "../img/clients/client-6.png";

const Clients = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client1} alt="image" className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client2} alt="image" className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client3} alt="image" className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client4} alt="image" className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client5} alt="image" className="img-fluid" />
        </div>
        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client6} alt="image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
