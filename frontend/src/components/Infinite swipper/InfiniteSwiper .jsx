// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "lottie-react";
import success from "../../assets/Lottie/success.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./InfiniteSwiper.css";
import shape from "../../assets/Images/shape (1).png";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="topper-section-container">
        <div className="image-bg-wrapper">
          <img src={shape} alt="" />
        </div>
        <div className="lottie-success">
          <Lottie animationData={success} loop={true} className="logo-lottie" />
        </div>
        <div className="heading">Our Accomplished Students</div>
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
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 1</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 2</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 3</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 4</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 5</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 6</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 7</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 8</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="container">
                <div className="top">
                  <div className="image-wrapper">
                    <img
                      src="https://img.freepik.com/free-photo/beautiful-female-student-showing-v-sign-smiling-happy-holding-notebooks-with-study-material-attending-courses-standing-blue-background_1258-70146.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="data-container">
                    <div className="name">Gaurika Nigam</div>
                    <div className="rank">AIR 9</div>
                    <div className="institute">CAT</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
