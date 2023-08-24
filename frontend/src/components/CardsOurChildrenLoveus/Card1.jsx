import React from "react";
import "./card1.css";
import quote from "../../assets/svg/quotes.svg";

function Card1({ review, imgsrc, name, quaifiedFor }) {
  return (
    <div className="ourStudentsLovesUsCard1">
      <div className="quote-svg-container">
        <img src={quote} alt="" />
      </div>
      <div className="message">{review}</div>
      <div className="student-info">
        <div className="image">
          <img src={imgsrc} alt="" />
        </div>
        <div className="information">
          <span className="name">{name}</span>
          <span className="tag">{quaifiedFor}</span>
        </div>
      </div>
    </div>
  );
}

export default Card1;
