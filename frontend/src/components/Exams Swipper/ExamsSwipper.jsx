import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "./examsSwipper.css";
import navbarContents from "../../other/navbar-contents.js";

function ExamsSwipper() {
  const [cources, setCources] = useState([]);

  useEffect(() => {
    let arr = [];
    const courses = navbarContents["courses"];
    for (const key in courses) {
      const value = courses[key];
      if (value) {
        arr = arr.concat(value);
      }
    }
    const chunkSize = 3;
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
    }
    setCources(result);
  }, []);

  return (
    <>
      <div className="exams-list-container">
        <div className="heading">With us you can crack!</div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <div className="exam-container">
              <div className="top">IIT JEE 1</div>
            </div>
            <div className="exam-container">
              <div className="middle">IIT JEE 1</div>
            </div>
            <div className="exam-container">
              <div className="bottom">IIT JEE 1</div>
            </div>
          </SwiperSlide> */}

          {cources.map((item) => {
            return (
              <SwiperSlide>
                <div className="exam-container">
                  <div className="top">{item[0].toUpperCase()}</div>
                </div>
                <div className="exam-container">
                  <div className="middle">{item[1].toUpperCase()}</div>
                </div>
                <div className="exam-container">
                  <div className="bottom">
                    {item[2] ? item[2].toUpperCase() : ""}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default ExamsSwipper;
