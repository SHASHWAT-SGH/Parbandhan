import React from "react";
import Navbar from "./components/navbar/NavbarOLD";
import Homepage from "./components/Home page/Homepage";
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

function App() {
  return (
    <div>
      <Navbar />
      {/* <Test /> */}
      <Homepage />
      {/* <Toppers /> */}
      <InfiniteSwiper />
      <OurCourses />
      <PastReviews />
      <OurChildrenLovesUs />
      <ExamsSwipper />
      <WhyParbandhan />
      <Footer />
      <HeroToppers />
    </div>
  );
}

export default App;
