import React, { useState } from "react";
import "./card2.css";
import quote from "../../assets/svg/quotes.svg";

function Card2({ thumbnail, videoUrl, review }) {
  const [video, setVideo] = useState(false);

  const playVideo = (e) => {
    e.target.style.display = "none";
    setVideo(true);
  };

  return (
    <div className="ourStudentsLovesUsCard2">
      <div className="top">
        <img src={thumbnail} alt="" onClick={playVideo} />
        {video ? <video src={videoUrl} autoPlay controls muted /> : ""}
      </div>
      <div className="bottom">
        <div className="quote-wrapper">
          <img src={quote} alt="" />
        </div>
        <div className="text">{review}</div>
      </div>
    </div>
  );
}

export default Card2;
