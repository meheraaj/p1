import React from "react";
import "./Pricing.css";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="p__box">
      <span className="title">Pricing</span>
      <div className="pricing">
        <PricingCard
          planName={"Basic"}
          price={"$19.95"}
          dm={"false"}
          cs={"false"}
        />
        <PricingCard
          planName={"Standard"}
          price={"$39.95"}
          dm={"true"}
          cs={"false"}
        />
        <PricingCard
          planName={"Premium"}
          price={"$99.95"}
          dm={"ture"}
          cs={"ture"}
        />
      </div>
    </div>
  );
};

export default Pricing;
