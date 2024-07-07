import React from "react";
import "./about.css";
import img1 from "../../assets/ftome.png";

const About = () => {
  return (
    <div className="about flexBox">
      <div className="about__left">
        <img src={img1} alt="" srcset="" className="hero__img" />
      </div>
      <div className="about__right">
        <div className="flexBox">
          <span className="leftText">About</span>
          <span className="rightText"> Me</span>
        </div>

        <span className="about__text">
          With 10years experience as professional Web developer, I have
          <br />
          acquired the skills and knowledge necessary to make your project a
          <br />
          success. I enjoy every step of the design process from discussion and
          <br />
          collaboration.
        </span>

        <ul className="exp__list">
          <li>
            <span className="left">10+</span>
            <span className="right">Years of Experience in Design</span>
          </li>
          <li>
            <span className="left">120+</span>
            <span className="right">Successfully project completed</span>
          </li>
          <li>
            <span className="left">60+</span>
            <span className="right">Global Customers</span>
          </li>
        </ul>

        <button className="hero__btn-left">Download CV 📄</button>
      </div>
    </div>
  );
};

export default About;
