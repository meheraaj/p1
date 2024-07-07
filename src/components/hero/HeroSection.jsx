import React from "react";

import "./HeroSection.css";
import guy from "../../assets/guy.png";
const HeroSection = () => {
  return (
    <div className="herosection flexBox">
      <div className="hero__left felxBox">
        <div className="hero__t-box">
          <span className="hero__gtr">Hi 👋</span>
          <span className="hero__title">
            I'm <span className="hero__left-title">John</span>
            <span className="hero__right-title"> Smith</span>
          </span>
        </div>
        <div className="hero__p-box">
          <div className="pbox__left"></div>
          <div className="pbox__right">
            <span className="pbox__title">Visual Designer</span>
          </div>
        </div>

        <div className="h_aboutme">
          <span className="hero__aboutme">
            I'm creative designer based with 10 years experince in <br />
            New York, and I'm very passionate and dedicated to my work.
          </span>
        </div>

        <div className="hero__btn-box">
          <button className="hero__btn-left">Hire Me✍️</button>
          <button className="hero__btn-right">View Portfolio</button>
        </div>
      </div>
      <div className="hero__right">
        <img src={guy} alt="" srcset="" className="hero__img" />
      </div>
    </div>
  );
};

export default HeroSection;
