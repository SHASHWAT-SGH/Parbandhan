import React from "react";
import "./heroToppers.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";

function HeroToppers() {
  return (
    <>
      <div className="hero-topper-container">
        <div className="heading">With us you can crack!</div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-page">.</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-page">.</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-page">.</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-page">.</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-page">.</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-page">.</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-page">.</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HeroToppers;
