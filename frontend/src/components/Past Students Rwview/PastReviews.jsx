import React from "react";
import "./pastReviews.css";
import shape from "../../assets/Images/shape2.png";
import blob from "../../assets/svg/blobanimation.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function PastReviews() {
  return (
    <div className="past-students-review-container">
      <img src={shape} alt="" className="shape" />
      <img src={blob} alt="" className="blob" />
      <div className="heading">
        <span className="circle">What</span> Our Past Students Have To
        <br />
        Say About Us.
      </div>
      <div className="reviews-container">
        <div className="first-row">
          <div className="review">
            <div className="message">
              "At Parbandhan, the devoted faculty fosters a dynamic learning
              environment. Interactive classroom sessions ensure every student's
              involvement. Expert-led mock interviews enriched my IIM Jammu BBA
              and MBA entrance preparation."
            </div>
            <div className="photo-container">
              <div className="photo">
                <img
                  src={require("../../assets/studentsImages/WhatsApp Image 2023-08-20 at 13.21.05.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-review">
                <div className="message">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum perspiciatis ab voluptates facere officiis voluptatum?
                  Laborum eum nemo, nam recusandae voluptatem reiciendis dolorum
                  ipsum autem excepturi, magni provident, voluptas voluptate.
                </div>
                <div className="photo">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-student-posing-against-pink-wall_273609-20881.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="review">
            <div className="message">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              nam repudiandae libero delectus impedit ducimus officia
              consequatur a, consequuntur perferendis beatae odio, eligendi
              dolore magni in reprehenderit similique voluptates est saepe
              praesentium!"
            </div>
            <div className="photo-container">
              <div className="photo">
                <img
                  src={require("../../assets/studentsImages/WhatsApp Image 2023-08-20 at 13.21.04.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <div className="review"></div> */}
        </div>
      </div>
    </div>
  );
}

export default PastReviews;
