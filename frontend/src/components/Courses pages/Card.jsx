import React from "react";
import "./card.css";

function Card({ imgsrc, name, details, footerDetails, priceOld, priceNew }) {
  return (
    <div className="course-card-wrapper">
      <div className="course">
        <div className="image">
          <img src={imgsrc} alt="" />
        </div>
        <div className="name">{name}</div>
        <div className="detail">{details[0]}</div>
        <div className="detail">
          {details[1]}
          <sup>th</sup>
        </div>

        <div className="card-footer">
          <ul>
            {footerDetails.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="price">
          &#8377;{priceNew} <strike>{priceOld}</strike>
        </div>
      </div>
    </div>
  );
}

export default Card;
