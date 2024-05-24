import React from "react";
// blog images
import b1 from "../assets/imgs/b1.jpg";
import b2 from "../assets/imgs/b2.jpg";
import b3 from "../assets/imgs/b3.jpg";
import Buttons from "./Buttons";

function BlogSection() {
  let blogData = [
    {
      blogImg: b1,
      blogHeading: "Look even slightly believable. If you are",
      blogDescription:
        "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      blogImg: b2,
      blogHeading: "Anything embarrassing hidden in the middle",
      blogDescription:
        "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      blogImg: b3,
      blogHeading: "Molestias magni natus dolores odio commodi.",
      blogDescription:
        "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold my-5">LATEST BLOGS</h2>
      <div className="row">
        {blogData.map((data) => {
          return (
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow ">
                <img
                  src={data.blogImg}
                  className="img-fluid"
                  alt="Blog Image"
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold">{data.blogHeading}</h4>
                  <p className="card-text">{data.blogDescription}</p>

                  <Buttons title={"Read More"}></Buttons>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BlogSection;
