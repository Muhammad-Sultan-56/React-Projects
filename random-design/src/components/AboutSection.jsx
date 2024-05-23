import React from "react";
import aboutImg from "../assets/imgs/about-img.png";
import Buttons from "./Buttons";
function AboutSection() {
  return (
    <section className="mx-5  bg-light my-3 p-3">
      <div className="row align-items-center">
        <div className="col-md-6 p-4">
          <img src={aboutImg} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 p-3 ">
          <div>
            <h2 className="fw-bold mb-3">ABOUT US</h2>
            <p className="mb-3 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolorem eum consequuntur ipsam repellat dolor soluta aliquid
              laborum, eius odit consectetur vel quasi in quidem, eveniet ab est
              corporis tempore.
            </p>
            <Buttons title={"Read More"}></Buttons>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
