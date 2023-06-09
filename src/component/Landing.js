import React from "react";
import About from "./About";
import Clients from "./Clients";
import Features from "./Features";
import Hero from "./Hero";
import Steps from "./Steps";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Accordion from "./Accordion";

const Landing = () => {
  return (
    <>
      <header id="header">
        <nav
          id="navbar"
          class=" navbar navbar-expand-lg sticky-top navbar-light bg-light"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="logo">Bikin</h1>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul
                class="navbar-nav me-auto mb-2 text-start mb-lg-0 d-flex justify-content-center"
                style={{ margin: "0 auto" }}
              >
                <li class="nav-item  ms-2">
                  <a class="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item ms-2">
                  <a class="nav-link " aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item ms-2">
                  <a class="nav-link " aria-current="page" href="#">
                    Service
                  </a>
                </li>
                <li class="nav-item ms-2">
                  <a class="nav-link " aria-current="page" href="#">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item ms-2">
                  <a class="nav-link " aria-current="page" href="#">
                    Team
                  </a>
                </li>
                <li class="nav-item ms-2">
                  <a class="nav-link " aria-current="page" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link " aria-current="page" href="#">
                    Drop Down
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <a class="nav-link " aria-current="page" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto " href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item ms-3">
                  <button class=" getstarted btn fw-bold " type="submit">
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section id="hero" className="pb-5">
        <Hero />
      </section>
      <main id="main">
        <section id="about" className="about ">
          <About />
        </section>
        <section id="clients" class="clients">
          <Clients />
        </section>
        <section id="features" className="features mt-5">
          <Features />
        </section>
        <section id="steps" className="steps ">
          <Steps />
        </section>
        <section id="services" class="services">
          <Services />
        </section>
        <section id="testimonials" className="testimonials">
          <Testimonials />
        </section>
        <section id="team" className="team">
          <Team />
        </section>
        <section>
          <Accordion />
        </section>
      </main>
    </>
  );
};

export default Landing;
