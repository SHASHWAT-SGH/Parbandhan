import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="course-card-wrapper">
      <div className="course">
        <div className="image">
          <img
            src="https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-10202.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="name">PREMIUM PROGRAM</div>
        <div className="detail">Two Year Program</div>
        <div className="detail">
          For class 11<sup>th</sup>
        </div>

        <div className="card-footer">
          <div className="btn-enroll"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
