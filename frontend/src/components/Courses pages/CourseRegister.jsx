import React, { useState } from "react";
import "./courseRegister.css";
import Card from "./Card";
import { useNavigate, useParams } from "react-router-dom";
import qr from "../../assets/QR/qr-modified.jpg";
import axios from "axios";

function CourseRegister() {
  const [errorMesage, setErrorMesage] = useState("");
  const [showQr, setShowQr] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "Student registration",
  });

  const handleChange = (e) => {
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setErrorMesage("Sending...");

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID_CONTACT;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: formData,
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      res.data === "OK"
        ? setErrorMesage("Request sent successfully.")
        : setErrorMesage("Error occured while sending request.");
    } catch (error) {
      console.log("error: " + error);
      setErrorMesage("Error occured while sending request.");
    }
  };

  return (
    <section className="course-page">
      <div className="main">
        <div className="left">
          {id === "premiumprogram" ? (
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
              priceNew="99"
              priceOld="199"
            />
          ) : id === "swiftprogram" ? (
            <Card
              imgsrc={
                "https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-13742.jpg"
              }
              name="SWIFT PROGRAM"
              details={["One Year Program", "For class 12"]}
              footerDetails={[
                "300+ Hours Sessions",
                "All Enterence Exams covered.",
                "Test Series: All India Mock tests on the actual exams pattern.",
                "Exclusive Study Matrial included",
                "Topic Tests included",
                "Slot based doubt sessions",
              ]}
              priceNew="199"
              priceOld="299"
            />
          ) : id === "crashcourse" ? (
            <Card
              imgsrc={"https://xamsprep.com/images/crash.png"}
              name="CRASH COURSE"
              details={["", "For class 12"]}
              footerDetails={[
                "150+ Hours Sessions",
                "All Enterence Exams covered.",
                "Test Series: All India Mock tests on the actual exams pattern.",
                "Exclusive Study Matrial included",
                "Topic Tests included",
                "Slot based doubt sessions",
              ]}
              priceNew="99"
              priceOld="199"
            />
          ) : (
            navigate("/pagenotfound")
          )}
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="heading">Enroll NOW</div>
            <div className="qr-container">
              <div className="qr-wrapper">
                <img src={qr} alt="" />
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
            <form onSubmit={sendEmail}>
              <div>
                <label htmlFor="fname">Name</label>
                <input
                  required
                  onChange={handleChange}
                  name="fname"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  required
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="abc@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone">Mobile Number</label>
                <input
                  required
                  onChange={handleChange}
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="1234567890"
                />
              </div>
              <div>
                <label htmlFor="transactionId">Transaction Id</label>
                <input
                  required
                  onChange={handleChange}
                  name="transactionId"
                  id="transactionId"
                  type="text"
                  placeholder="Enter the payment transaction id"
                />
              </div>
              <button type="submit">Register</button>
              <div className="error_msg">{errorMesage}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseRegister;
