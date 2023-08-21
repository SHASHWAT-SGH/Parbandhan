import React from "react";
import "./card2.css";
import quote from "../../assets/svg/quotes.svg";
import imageBack from "../../assets/Images/testVideoBackground.png";

function Card2() {
  return (
    <div className="ourStudentsLovesUsCard2">
      <div className="top">
        <img src={imageBack} alt="" />
      </div>
      <div className="bottom">
        <div className="quote-wrapper">
          <img src={quote} alt="" />
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi suscipit
          vel repellat ipsum dolor sit amet consectetur adipisicing elit. Nisi
          suscipit vel repellat??
        </div>
      </div>
    </div>
  );
}

export default Card2;
