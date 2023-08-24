import React from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Home page/Homepage.jsx";
import Toppers from "./components/Toppers Section/Toppers";
import PastReviews from "./components/Past Students Rwview/PastReviews";
import WhyParbandhan from "./components/Why Parbandhan/WhyParbandhan";
import Footer from "./components/Footer/Footer";
import InfiniteSwiper from "./components/Infinite swipper/InfiniteSwiper ";
import ExamsSwipper from "./components/Exams Swipper/ExamsSwipper";
import Test from "./components/navbar/Test";
import OurChildrenLovesUs from "./components/CardsOurChildrenLoveus/OurChildrenLovesUs";
import OurCourses from "./components/Our courses/OurCourses";
import HeroToppers from "./components/Hero Section Toppers Swipper/HeroToppers";
import CourseRegister from "./components/Courses pages/CourseRegister";
import ContactUsSideBar from "./components/Contact Us Sidebar/ContactUsSideBar";

function App() {
  return (
    <div>
      <Navbar />
      <ContactUsSideBar />
      {/* <CourseRegister /> */}
      {/* <Homepage />
      <InfiniteSwiper />
      <OurCourses />
      <OurChildrenLovesUs />
      <ExamsSwipper />
      <WhyParbandhan />
      <Footer /> */}
    </div>
  );
}

export default App;
