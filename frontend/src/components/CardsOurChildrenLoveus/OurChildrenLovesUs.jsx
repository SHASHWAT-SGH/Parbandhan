import React from "react";
import Card1 from "./Card1";
import "./ourChildrenLovesUs.css";
import heart from "../../assets/svg/heart.svg";
import threeStars from "../../assets/svg/threeStars.svg";
import Card2 from "./Card2";

function OurChildrenLovesUs() {
  return (
    <section className="our-children-loves-us">
      <div className="top">
        <img src={threeStars} alt="" className="threeStars" />
        Our Students{" "}
        <span>
          <img src={heart} alt="" />
        </span>{" "}
        Us
      </div>
      <div className="middle">
        <div className="left">
          <Card1 />
          <Card2 />
        </div>
        <div className="right">
          <Card2 />
          <Card1 />
        </div>
      </div>
    </section>
  );
}

export default OurChildrenLovesUs;
