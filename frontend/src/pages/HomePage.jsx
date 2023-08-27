import React from "react";
import Homepage from "../components/Home page/Homepage";
import OurCourses from "../components/Our courses/OurCourses";
import OurChildrenLovesUs from "../components/CardsOurChildrenLoveus/OurChildrenLovesUs";
import ExamsSwipper from "../components/Exams Swipper/ExamsSwipper";
import WhyParbandhan from "../components/Why Parbandhan/WhyParbandhan";
import InfiniteSwiper from "../components/Infinite swipper/InfiniteSwiper ";

function HomePage() {
  return (
    <>
      <Homepage />
      <InfiniteSwiper />
      <OurCourses />
      <OurChildrenLovesUs />
      <ExamsSwipper />
      <WhyParbandhan />
    </>
  );
}

export default HomePage;
