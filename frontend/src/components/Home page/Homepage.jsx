import React, { useEffect, useRef } from "react";
import "./homepage.css";
import HeroToppers from "../Hero Section Toppers Swipper/HeroToppers";
import Typed from "typed.js";

import Lottie from "lottie-react";
import scrollDown from "../../assets/Lottie/scroll down.json";

function Homepage() {
  const el = useRef("");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Path to Healing and Growth"`],
      typeSpeed: 30,
      smartBackspace: true,
      startDelay: 1000,
      shuffle: false,
      loop: true,
      loopCount: Infinity,
      backSpeed: 40,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  });

  return (
    <>
      <div className="home-window">
        <div className="left">
          <div>
            <span className="heighlight-text">Parbandhan</span> : Your Bridge to
            Higher Education <span className="heighlight-text">Success</span>{" "}
            and Entrance Exam{" "}
            <span className="heighlight-text">Excellence</span>
          </div>

          <div className="lower-text">
            <span className="heighlight-text">"</span>Guiding You to a{" "}
            <span className="heighlight-text">Brighter Tomorrow:</span>
            <br />
            <span style={{ marginLeft: "1rem" }}>Your </span>
            <span className="text heighlight-text" ref={el} />
          </div>
        </div>

        <div className="right">
          <HeroToppers />
        </div>
      </div>
      <div className="lottie-scroll-down-wrapper">
        <div className="message-scroll">Scroll Down</div>
        <div className="lottie-scroll-down">
          <Lottie
            animationData={scrollDown}
            loop={true}
            className="logo-lottie"
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
