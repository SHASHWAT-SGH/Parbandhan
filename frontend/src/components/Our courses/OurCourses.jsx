import React from "react";
import "./ourCourses.css";

function OurCourses() {
  return (
    <section className="our-courses" id="courses">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="svg1"
      >
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,160L26.7,154.7C53.3,149,107,139,160,154.7C213.3,171,267,213,320,234.7C373.3,256,427,256,480,224C533.3,192,587,128,640,128C693.3,128,747,192,800,186.7C853.3,181,907,107,960,85.3C1013.3,64,1067,96,1120,101.3C1173.3,107,1227,85,1280,96C1333.3,107,1387,149,1413,170.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="svg2"
      >
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,160L26.7,170.7C53.3,181,107,203,160,186.7C213.3,171,267,117,320,112C373.3,107,427,149,480,149.3C533.3,149,587,107,640,96C693.3,85,747,107,800,117.3C853.3,128,907,128,960,112C1013.3,96,1067,64,1120,69.3C1173.3,75,1227,117,1280,144C1333.3,171,1387,181,1413,186.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="heading">Our Courses</div>
      <div className="sub-heading">Find Best Course For Yourself!</div>
      {/* <div className="nav-wrapper">
        <div className="nav-link">link</div>
        <div className="nav-link active">link</div>
        <div className="nav-link">link</div>
        <div className="nav-link">link</div>
        <div className="nav-link">link</div>
      </div> */}
      <div className="courses-wrapper">
        <div className="course">
          <div className="image">
            <img
              src="https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-10202.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="name">PREMIUM PROGRAM</div>
          <div className="detail">Two Year Program</div>
          <div className="detail">
            For class 11<sup>th</sup>
          </div>

          <div className="card-footer">
            <div className="btn-enroll"></div>
          </div>
        </div>
        <div className="course">
          <div className="image">
            <img
              src="https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-13742.jpg"
              alt=""
            />
          </div>
          <div className="name">SWIFT PROGRAM</div>
          <div className="detail">One Year Program</div>
          <div className="detail">
            For class 12<sup>th</sup>
          </div>

          <div className="card-footer">
            <div className="btn-enroll"></div>
          </div>
        </div>
        <div className="course">
          <div className="image">
            <img src="https://xamsprep.com/images/crash.png" alt="" />
          </div>
          <div className="name">EXTENDED CRASH COURSE</div>
          <div className="detail">Crash Course</div>
          <div className="detail">
            For class 12<sup>th</sup>
          </div>

          <div className="card-footer">
            <div className="btn-enroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCourses;
