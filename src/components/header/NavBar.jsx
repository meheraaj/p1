import React from "react";

import "./NavBar.css";
import logoPng from "../../assets/image-removebg-preview.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <header className="n__header flexBox">
        <div className="n__left">
          <img src={logoPng} alt="JS" className="n__logo" />
          <span className="n__logo-text">MRaj</span>
        </div>
        <div className="n__middle">
          <ul className="flexBox">
            <li className="n__list">
              <a href="/" className="n__navbtn">
                Home
              </a>
            </li>
            <li className="n__list">
              <a href="/" className="n__navbtn">
                About
              </a>
            </li>
            <li className="n__list">
              <a href="/" className="n__navbtn">
                Services
              </a>
            </li>
            <li className="n__list">
              <a href="/" className="n__navbtn">
                Portfolio
              </a>
            </li>
            <li className="n__list">
              <a href="/" className="n__navbtn">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="n__right">
          <button className="n__button">Let's Talk</button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
