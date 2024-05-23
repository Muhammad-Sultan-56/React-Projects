import React from "react";

import sliderBg from "../assets/imgs/slider-img.png";
import Buttons from "./Buttons";

function HeroSection() {
  return (
    <>
      <section className="container-fluid ">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {/*============== 1st slide ============= */}

            <div className="carousel-item active">
              <div className="row bg-light mx-5 px-5 hero-row align-items-center">
                <div className="col-md-5 d-flex flex-column justify-content-center">
                  <h1 className="fw-bold mb-3">FOR ALL YOUR FURNITURE NEEDS</h1>
                  <p className="fs-5 mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus quidem maiores perspiciatis, illo maxime voluptatem a
                    itaque suscipit.
                  </p>
                  <div className="d-flex gap-3">
                    <Buttons title={"ABOUT US"}></Buttons>
                    <Buttons title={"CONTACT US"}></Buttons>
                  </div>
                </div>
                <div className="col-md-7">
                  <img
                    src={sliderBg}
                    alt="slider image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/*===================== 2nd slide ================*/}

            <div className="carousel-item">
              <div className="row bg-light hero-row mx-5 align-items-center px-5">
                <div className="col-md-5 d-flex flex-column justify-content-center">
                  <h1 className="fw-bold mb-3">FOR ALL YOUR FURNITURE NEEDS</h1>
                  <p className="fs-5 mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus quidem maiores perspiciatis, illo maxime voluptatem a
                    itaque suscipit.
                  </p>
                </div>
                <div className="col-md-7">
                  <img
                    src={sliderBg}
                    alt="slider image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/*===================== 3rd slide ================*/}

            <div className="carousel-item">
              <div className="row bg-light hero-row mx-5 align-items-center px-5">
                <div className="col-md-5 d-flex flex-column justify-content-center">
                  <h1 className="fw-bold mb-3">FOR ALL YOUR FURNITURE NEEDS</h1>
                  <p className="fs-5 mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus quidem maiores perspiciatis, illo maxime voluptatem a
                    itaque suscipit.
                  </p>
                </div>
                <div className="col-md-7">
                  <img
                    src={sliderBg}
                    alt="slider image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
