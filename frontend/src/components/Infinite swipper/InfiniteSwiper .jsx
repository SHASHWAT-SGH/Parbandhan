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
  const data = [
    {
      name: "Mitul Gupta",
      institute: "IIM-Rohtak Christ-Central-Campus-Symbiosis-Pune NMIMS-Mumbai",
      img: "Mitul Gupta.jpg",
    },
    {
      name: "Aditya Soni",
      institute:
        "IIM-Rohtak IIM-Bodhgaya Christ-Central-Campus-Symbiosis-Pune NMIMS-Mumbai",
      img: "aditya soni.jpg",
    },
    {
      name: "Diya Bansal",
      institute: "IIM-Rohtak Christ-BGR-Campus-Symbiosis-Noida",
      img: "diya bansal.jpg",
    },
    {
      name: "Priyal Goyal",
      institute: "IIM-Bodhgaya Christ-Yeshwanthpur-Symbiosis-Pune",
      img: "Priyal Goyal.jpg",
    },
    {
      name: "Gavish Singla",
      institute: "NMIMS-Mumbai Christ-Central-Campus",
      img: "gavish singla.jpg",
    },
    {
      name: "Naitik Jain",
      institute: "NMIMS-Mumbai Christ-Delhi-NCR-Campus",
      img: "naitik jain.jpg",
    },
    {
      name: "Priyanshi Mehta",
      institute: "NMIMS-Mumbai Christ-Kengeri-Campus",
      img: "priyanshi mehta.jpg",
    },
    {
      name: "Arju Panghal",
      institute: "NMIMS-Banglore Christ-Central-Campus",
      img: "arju panghal.jpg",
    },
    {
      name: "Khushpreet",
      institute: "Christ-Central-Campus-Banglore",
      img: "khushpreet.jpg",
    },
    {
      name: "Ansh Bajaj",
      institute: "Christ-Yeshwanthpur-Banglore",
      img: "ansh bajaj.jpg",
    },
    {
      name: "Jashan Chhabra",
      institute: "Christ-Yeshwanthpur-Banglore NMIMS-Hyderabad",
      img: "jashan chhabra.jpg",
    },
    {
      name: "Jiya Sidhana",
      institute: "Christ-Yeshwanthpur-Banglore",
      img: "jiya sidhana.jpg",
    },
    {
      name: "Garvit Aneja",
      institute: "Symbiosis-Noida-Christ-Delhi-NCR-Campus",
      img: "garvit aneja.jpg",
    },
    {
      name: "Divansh Agarwal",
      institute: "Christ-Yeshwanthpur-Banglore",
      img: "divansh agarwal.jpg",
    },
    {
      name: "Pratiyush",
      institute: "Christ-Yeshwanthpur-Banglore NMIMS-Hyderabad",
      img: "pratiyush.jpg",
    },
    {
      name: "Aakash Agarwal",
      institute: "Symbiosis-Pune Christ-Yeshwanthpur-Campus",
      img: "aakash agarwal.jpg",
    },
    {
      name: "Vansh Jain",
      institute: "Christ-Delhi-NCR-Campus NMIMS-Banglore",
      img: "vansh jain.jpg",
    },
    {
      name: "Hanshika",
      institute: "Symbiosis-Banglore",
      img: "hanshika.jpg",
    },
    {
      name: "Chirag Bansal",
      institute: "Christ-Delhi-NCR-Campus",
      img: "chirag bansal.jpg",
    },
    {
      name: "Kriti Grover",
      institute: "Christ-Delhi-NCR-Campus",
      img: "kriti grover.jpg",
    },
  ];

  const silders = data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="wrapper">
          <div className="container">
            <div className="top">
              <div className="image-wrapper">
                <img
                  src={require(`../../assets/studentsImages/${item.img}`)}
                  alt=""
                />
              </div>
            </div>
            <div className="bottom">
              <div className="data-container">
                <div className="name">{item.name}</div>
                {/* <div className="rank">AIR 1</div> */}
                <div className="institute">{item.institute}</div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className="topper-section-container" id="toppers">
        <div className="image-bg-wrapper">
          <img src={shape} alt="" />
        </div>
        <div className="svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d9ff"
              fill-opacity="1"
              d="M0,320L48,282.7C96,245,192,171,288,160C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
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
          {silders}
        </Swiper>
      </section>
    </>
  );
}
