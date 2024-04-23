import React from "react";

function Services() {
  return (
    <div>
      <h2 className="my-3 text-center">Services</h2>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-3 col-sm12 mb-3">
            <div class="card border-0 shadow text-center">
              <img
                src="../public/imgs/delivery.jpg"
                class=" ser-img"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">Fast Delivery</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm12 mb-3">
            <div class="card border-0 shadow text-center">
              <img
                src="../public/imgs/quality.jpg"
                class=" ser-img"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">Best Quality</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm12 mb-3">
            <div class="card border-0 shadow text-center">
              <img
                src="../public/imgs/payment.jpg"
                class=" ser-img"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">Easy Payment</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm12 mb-3">
            <div class="card border-0 shadow text-center">
              <img src="../public/imgs/suport.jpg" class=" ser-img" alt="..." />
              <div class="card-body ">
                <h5 class="card-title">24/7 Support</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
