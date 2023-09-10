import React from "react";
import "./parbandhanVideos.css";
function ParbandhanVideos() {
  return (
    <section className="parbandhan-videos">
      <div className="container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5lUIhXQIASQ?si=aXwZTdqp9ifZmuRB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/z2jHPJlXQAI?si=OTDhxCjesf796tgN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default ParbandhanVideos;
