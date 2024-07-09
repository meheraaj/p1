import React from "react";

import "./NavBar.css";
import logoPng from "../../assets/image-removebg-preview.png";
import { Link } from "react-router-dom";

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
              <Link to="/" className="n__navbtn">
                Home
              </Link>
            </li>
            <li className="n__list">
              <Link to="/about" className="n__navbtn">
                About
              </Link>
            </li>
            <li className="n__list">
              <Link to="/price" className="n__navbtn">
                Pricing
              </Link>
            </li>
            <li className="n__list">
              <Link to="/portfolio" className="n__navbtn">
                Portfolio
              </Link>
            </li>
            <li className="n__list">
              <Link to="/blog" className="n__navbtn">
                Blog
              </Link>
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
