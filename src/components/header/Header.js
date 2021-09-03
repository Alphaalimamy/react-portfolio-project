import React from "react";
import Typed from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web development and website promotion</h1>

        <Typed
          className="typed-text"
          strings={["Web Design", "App Development", "Database Design"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#contact" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
