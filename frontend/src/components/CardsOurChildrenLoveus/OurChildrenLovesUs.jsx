import React from "react";
import Card1 from "./Card1";
import "./ourChildrenLovesUs.css";
import heart from "../../assets/svg/heart.svg";
import threeStars from "../../assets/svg/threeStars.svg";
import Card2 from "./Card2";

import thumb1 from "../../assets/Images/Santa Monica.jpg";
import thumb2 from "../../assets/Images/Santa.jpg";
import video1 from "../../assets/videos/1.mp4";
import video2 from "../../assets/videos/2.mp4";

import img1 from "../../assets/studentsImages/Priyal Goyal.jpg";
import img2 from "../../assets/studentsImages/Mitul Gupta.jpg";

function OurChildrenLovesUs() {
  return (
    <section className="our-children-loves-us" id="testimonials">
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
          <Card1
            review={
              "Parbandhan Career Institute has been my launchpad to success. With unwavering support from dedicated faculty, I'm now set to thrive at IIM Bodh Gaya. Gratitude and excitement define my journey!"
            }
            name={"Priyal Goyal"}
            quaifiedFor={"IIM Bodhgaya - Christ-Yeshwanthpur Symbiosis - Pune"}
            imgsrc={img1}
          />
          <Card2
            thumbnail={thumb1}
            videoUrl={video1}
            review={
              "Parbandhan Career Institute provided a transformative learning environment. Grateful for faculty's support and guidance that led to my selection at Christ University Bangalore. A remarkable journey indeed."
            }
          />
        </div>
        <div className="right">
          <Card2
            thumbnail={thumb2}
            videoUrl={video2}
            review={
              "Parbandhan Career Institute sculpted my path to triumph. Grateful for faculty's dedication. Thrilled to secure Christ University Bangalore admission. A journey of growth and achievement."
            }
          />
          <Card1
            review={
              "Parbandhan Career Institute's guidance was invaluable in my IIM Rohtak journey. Supportive mentors, transformative learning. Grateful for the solid foundation paving my way to success."
            }
            name={"Mitul Gupta"}
            quaifiedFor={
              "IIM Rohtak - Christ Central Campus Symbiosis - Pune NMIMS"
            }
            imgsrc={img2}
          />
        </div>
      </div>
    </section>
  );
}

export default OurChildrenLovesUs;
