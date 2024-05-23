import React from "react";

function Navbar() {
  let links = ["HOME", "ABOUT", "FURNITURE", "BLOG", "CONTACT US"];

  return (
    <>
      <nav className="navbar navbar-expand-md bg-white">
        <div className="container-fluid mx-5">
          <a className="navbar-brand fw-bold fs-3" href="#">
            EDGECUT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Menu is Dynamin with map method */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-4">
              {links.map((link) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="d-flex">
              <a href="#" className="text-dark text-decoration-none">
                LOGIN
              </a>
              <div>
                <i className="bi bi-person-fill mx-2"></i>
                <i className="bi bi-search ms-4"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
