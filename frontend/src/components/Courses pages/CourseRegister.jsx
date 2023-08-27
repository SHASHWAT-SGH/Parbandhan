import React, { useState } from "react";
import "./courseRegister.css";
import Card from "./Card";
function CourseRegister() {
  const [showQr, setShowQr] = useState(false);

  return (
    <section className="course-page">
      <div className="main">
        <div className="left">
          <Card
            imgsrc={
              "https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-10202.jpg?w=2000"
            }
            name="PREMIUM PROGRAM"
            details={["Two Year Program", "For class 11"]}
            footerDetails={[
              "450+ Hours Sessions",
              "All Enterence Exams coveres.",
              "Test Series: All India Mock tests on the actual exams pattern.",
              "Exclusive Study Matrial included",
              "Topic Tests included",
              "Slot based doubt sessions",
            ]}
          />
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="heading">Enroll NOW</div>
            <div className="qr-container">
              <div className="qr-wrapper">
                <img
                  src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
                  alt=""
                />
                <div
                  className="cover"
                  style={{ display: showQr ? "none" : "block" }}
                ></div>
                <div
                  className="show-qr"
                  style={{ display: showQr ? "none" : "flex" }}
                  onClick={() => {
                    setShowQr(true);
                  }}
                >
                  <span>SHOW QR</span>
                </div>
              </div>
            </div>

            {/* form */}
            <form action="">
              <div>
                <label htmlFor="fname">Name</label>
                <input id="name" type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="abc@example.com" />
              </div>

              <div>
                <label htmlFor="phone">Mobile Number</label>
                <input id="phone" type="tel" placeholder="1234567890" />
              </div>
              <div>
                <label htmlFor="transactionId">Transaction Id</label>
                <input
                  id="transactionId"
                  type="text"
                  placeholder="Enter the payment transaction id"
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseRegister;
