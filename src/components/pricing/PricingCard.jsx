import React from "react";
import "./PricingCard.css";

const PricingCard = ({ planName, price, dm, cs }) => {
  return (
    <div className="pricing__card">
      <div className="planname">
        <span className="planname__text">{planName} Plan</span>
      </div>
      <span className="discount">Try out Basic Plan, Save 20%.</span>
      <div className="priceBox flexBox">
        <span className="priceBox__price">{price}</span>
        <span className="priceBox__length">/per month</span>
      </div>

      <div className="featuresbox">
        <ul className="f__ul">
          <li className="f__li">
            <span className="f__text">✔️ Website Design</span>
          </li>
          <li className="f__li">
            <span className="f__text"> ✔️ Mobile Apps Design</span>
          </li>
          <li className="f__li">
            <span className="f__text">✔️ Product Design</span>
          </li>
          <li className="f__li">
            <span className={dm == "false" ? "f__textDisable" : "f__text"}>
              ✔️ Digital Marketing
            </span>
          </li>
          <li className="f__li">
            <span className={cs == "false" ? "f__textDisable" : "f__text"}>
              ✔️ Custom Support
            </span>
          </li>
        </ul>
      </div>

      <div className="buttonBox">
        <button className="hero__btn-left">Subscribe Now</button>
      </div>
    </div>
  );
};

export default PricingCard;
