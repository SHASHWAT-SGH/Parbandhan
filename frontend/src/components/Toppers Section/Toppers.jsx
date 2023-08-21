import React from "react";
// import "./toppers.css";
// import Lottie from "lottie-react";
// import { LottiePlayer } from "lottie-react";
// import celebration from "../../assets/Lottie/celebration.json";
import celebration from "../../assets/Images/celebration2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Toppers() {
  return (
    <>
      <div className="topper-section-container">
        <img src={celebration} alt="" className="celebration-img" />
        <div className="heading">Our Top Rankers</div>

        <div className="topper-details-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="topper">
                <div className="image">
                  <img
                    src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <div className="name">Shashwat</div>
                <div className="batch">AIR 1</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Toppers;
