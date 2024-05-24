import React from "react";

// testimonial img
import testimonialImg from "../assets/imgs/client.jpg";

function TestimonialSection() {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold my-5">TESTIMONIALS</h2>
      <div className="container ">
        <div className="row">
          <div className="col-lg-9 mx-auto p-3 shadow">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner ">
                {/*===== first slide ====== */}
                <div className="carousel-item active ">
                  <div className="row shadow ">
                    <div className="col-lg-4 px-5">
                      <img
                        src={testimonialImg}
                        style={{ height: "150px" }}
                        className="img-fluid rounded-circle test-img"
                        alt="Carousel Image"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h3>Ali</h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Similique debitis sit voluptate totam repudiandae
                        quae nisi ratione magnam alias ipsam nihil facilis
                        corporis eveniet, dolorem impedit, assumenda saepe
                        aperiam.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================ Second slide ========== */}
                <div className="carousel-item">
                  <div className="row shadow ">
                    <div className="col-lg-4 px-5">
                      <img
                        src={testimonialImg}
                        style={{ height: "150px" }}
                        className="img-fluid rounded-circle test-img"
                        alt="Carousel Image"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h3>Ali</h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Similique debitis sit voluptate totam repudiandae
                        quae nisi ratione magnam alias ipsam nihil facilis
                        corporis eveniet, dolorem impedit, assumenda saepe
                        aperiam.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================ Third slide ========== */}

                <div className="carousel-item active ">
                  <div className="row shadow ">
                    <div className="col-lg-4 px-5">
                      <img
                        src={testimonialImg}
                        style={{ height: "150px" }}
                        className="img-fluid rounded-circle test-img"
                        alt="Carousel Image"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h3>Ali</h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Similique debitis sit voluptate totam repudiandae
                        quae nisi ratione magnam alias ipsam nihil facilis
                        corporis eveniet, dolorem impedit, assumenda saepe
                        aperiam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button text-dark"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
