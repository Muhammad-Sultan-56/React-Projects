import React from "react";
// imgs of the footer
import f1 from "../assets/imgs/f1.png";
import f2 from "../assets/imgs/f2.png";
import f3 from "../assets/imgs/f3.png";
import f4 from "../assets/imgs/f4.png";
import f5 from "../assets/imgs/f5.png";
import f6 from "../assets/imgs/f6.png";
import Buttons from "./Buttons";

function Footer() {
  return (
    <footer className="container bg-dark p-4">
      <div className="container">
        {/*=============== first row for contact info call , email , address ============== */}
        <div className="row text-white text-center mb-4">
          <div className="col-md-4 ">
            <i className="bi bi-telephone-fill  fs-3"></i>
            <p className="fs-5">Call : 0300-1234567</p>
          </div>

          <div className="col-md-4 ">
            <i className="bi bi-envelope-fill  fs-3"></i>
            <p className="fs-5">Email : anymail@gmail.com</p>
          </div>

          <div className="col-md-4 ">
            <i className="bi bi-geo-alt-fill  fs-3"></i>
            <p className="fs-5">Location : any location in Pakistan.</p>
          </div>
        </div>

        {/*=============== second row for other sections in footer ================ */}
        <div className="row text-white">
          {/*======= Quick links section ========== */}
          <div className="col-md-3 p-3">
            <p className="fs-3">QUICK LINKS</p>
            <div className="d-flex justify-content-between fs-5">
              <span>Home</span>
              <span>About</span>
            </div>
            <div className="d-flex justify-content-between fs-5">
              <span>Furniture</span>
              <span>Blog</span>
            </div>
            <div className="d-flex justify-content-between fs-5">
              <span>Contact Us</span>
            </div>
          </div>
          {/*=========== instagram feeds ======== */}
          <div className="col-md-4 mx-3 p-3">
            <div className="row mx-auto w-75">
              <p className="fs-4">INSTAGRAM FEEDS</p>
              <div className="col-4 p-2">
                <div className="f-card p-2 bg-white">
                  <img src={f1} alt="footer image" className="img-fluid" />
                </div>
              </div>

              <div className="col-4 p-2">
                <div className="f-card p-2 bg-white">
                  <img src={f2} alt="footer image" className="img-fluid" />
                </div>
              </div>

              <div className="col-4 p-2">
                <div className="f-card p-2 bg-white">
                  <img src={f3} alt="footer image" className="img-fluid" />
                </div>
              </div>

              <div className="col-4 p-2">
                <div className="f-card p-2 bg-white">
                  <img src={f4} alt="footer image" className="img-fluid" />
                </div>
              </div>

              <div className="col-4 p-2">
                <div className="f-card p-2 bg-white">
                  <img src={f5} alt="footer image" className="img-fluid" />
                </div>
              </div>

              <div className="col-4 p-2">
                <div className="f-card p-2 bg-white">
                  <img src={f6} alt="footer image" className="img-fluid" />
                </div>
              </div>

              <div className="col-4"></div>
              <div className="col-4"></div>
            </div>
          </div>

          {/*===== news letter section in footer =========== */}
          <div className="col-md-4 p-3">
            <p className="fs-4">INSTAGRAM FEEDS</p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control shadow-none form-element mb-3"
                  placeholder="Enter  Your Email"
                />
                <Buttons title={"Subscribe"}></Buttons>
              </div>
            </form>

            <div className="icons d-flex gap-3">
              <span className="icon p-1 px-3 fs-4 fw-bold">f</span>

              <span className="icon">
                <i class="bi bi-twitter"></i>
              </span>

              <span className="icon ">
                <i class="bi bi-linkedin"></i>
              </span>

              <span className="icon">
                <i class="bi bi-instagram"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
