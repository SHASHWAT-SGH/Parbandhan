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
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

function HeroToppers() {
  return (
    <>
      <div className="hero-topper-container">
        {/* <div className="heading">With us you can crack!</div> */}

        <div className="swipper-container">
          <div className="gradient"></div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            speed={1000}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 4,
              slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/1.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/2.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/3.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/4.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/5.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/6.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/7.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/8.png")} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-page">
                <img src={require("../../assets/Topper Slider/9.png")} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroToppers;
