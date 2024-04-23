import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid p-5 mt-4 bg-light">
        <div className="row">
          <div className="col-md-4 p-3">
            <h5>Landing Page</h5>
            <p className="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              assumenda magnam mollitia dolorem minima eum a numquam atque ipsa
              voluptatibus, animi odit quia obcaecati ratione sapiente
              dignissimos vel adipisci itaque?
            </p>
          </div>

          <div className="col-md-1"></div>
          <div className="col-md-3 p-3">
            <h5>Links</h5>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Register</li>
              <li>Logout</li>
            </ul>
          </div>

          <div className="col-md-4 p-3">
            <h5>Follow us</h5>
            <img
              src="../public/imgs/social.png"
              className="img-fluid social"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-dark text-white text-center p-2">
        <p>Design by Muhammad Sultan</p>
      </div>
    </div>
  );
}

export default Footer;
