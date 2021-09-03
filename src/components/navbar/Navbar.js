import React from "react";

// REACT FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navrbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#LOGO">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link">
                  about me
                </a>
              </li>

              {/* services */}
              <li className="nav-item">
                <a className="nav-link" href="#link">
                  services
                </a>
              </li>

              {/* experience */}
              <li className="nav-item">
                <a className="nav-link" href="#link">
                  experience
                </a>
              </li>

              {/* portfolio */}
              <li className="nav-item">
                <a className="nav-link" href="#link">
                  portfolio
                </a>
              </li>

              {/* contact */}
              <li className="nav-item">
                <a className="nav-link" href="#link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
