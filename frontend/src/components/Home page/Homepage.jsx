// import React, { useEffect, useRef } from "react";
import "./homepage.css";
import shape from "../../assets/Images/shape (1).png";

// import Typed from "typed.js";

function Homepage() {
  // const el = useRef("");

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [" are from Pratham."],
  //     typeSpeed: 30,
  //     smartBackspace: true,
  //     startDelay: 1000,
  //     shuffle: false,
  //     loop: true,
  //     loopCount: Infinity,
  //     backSpeed: 40,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // });

  return (
    <>
      <div className="home-window">
        <div className="left">
          <div>
            <span className="heighlight-text">Parbandhan</span> : Your Bridge to
            Higher Education <span className="heighlight-text">Success</span>{" "}
            and Entrance Exam{" "}
            <span className="heighlight-text">Excellence</span>
            {/* Empower</span> Your <br />{" "}
            <span className="heighlight-text">Learning</span> Journey With{" "}
            <br /> <span className="heighlight-text">Parbandhan</span> */}
          </div>

          <div className="lower-text">
            <span className="heighlight-text">1 lakh student</span> on platform.{" "}
            <br />
            More than <span className="heighlight-text">50%</span> of the 2022
            UPSC and state services examination
            <span className="heighlight-text"> toppers </span>
            are from Parbandhan.
            {/* <div className="text" ref={el} /> */}
          </div>
        </div>

        <div className="right">
          <img src={shape} alt="" className="penta-shape" />
          <div className="content-pannel">
            <div className="left-hero">
              <img
                src="https://media.gettyimages.com/id/1057838868/photo/beautiful-young-graduate-smiles-in-delight-at-her-success.jpg?s=612x612&w=gi&k=20&c=rkp1XmZcv6CReyWDfqjf6qwUvyi6F-AQBsQWrhWFOqs="
                alt=""
              />
            </div>
            <div className="right-hero">
              <img
                src="https://img.freepik.com/premium-photo/student-kid-woman-isolated-yellow-background-thinking-idea-while-looking-up_1368-229781.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
