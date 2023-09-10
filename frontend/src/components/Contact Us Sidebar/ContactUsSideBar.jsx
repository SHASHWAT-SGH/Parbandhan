import { useState } from "react";
import "./contactUsSideBar.css";
import axios from "axios";

function ContactUsSideBar() {
  const [errorMesage, setErrorMesage] = useState("");
  const fadeInAnimation = () => {
    document
      .querySelector(".contact-us-sidebar-wrapper .open-btn")
      .addEventListener("click", () => {
        const messageElement = document.querySelector(
          ".contact-us-modal-wrapper"
        );
        messageElement.style.display = "flex";
        messageElement.classList.remove("fadeout");
        messageElement.classList.add("fadein");
        messageElement.addEventListener("animationend", () => {
          messageElement.classList.remove("fadein");
          messageElement.style.display = "flex";
        });
      });
  };

  const fadeOutAnimation = () => {
    document
      .querySelector(".contact-us-modal .cross")
      .addEventListener("click", () => {
        const messageElement = document.querySelector(
          ".contact-us-modal-wrapper"
        );
        messageElement.classList.remove("fadein");
        messageElement.classList.add("fadeout");
        messageElement.addEventListener("animationend", () => {
          messageElement.style.display = "none";
          messageElement.classList.remove("fadeout");
        });
      });
  };

  const [formData, setFormData] = useState({
    type: "call back request",
    fname: "",
    lname: "",
    email: "",
    phone: "",
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
    <>
      <div
        className="contact-us-sidebar-wrapper"
        onClick={() => {
          fadeInAnimation();
        }}
      >
        <div className="open-btn">Contact Us</div>
      </div>

      <div className="contact-us-modal-wrapper">
        <div className="contact-us-modal">
          <span
            className="cross"
            onClick={() => {
              fadeOutAnimation();
            }}
          >
            X
          </span>
          <div className="heading">Request A Call Back</div>
          <p className="sub-text">
            Have an admission query related to Parbandhan? Fill this form and
            our team will get in touch with you within a day during working
            hours!
          </p>

          <form onSubmit={sendEmail}>
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                id="fname"
                name="fname"
                type="text"
                placeholder="Enter your first name"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                id="lname"
                name="lname"
                type="text"
                placeholder="Enter your last name"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="abc@example.com"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Mobile Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="1234567890"
                required
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Request a callback
            </button>
          </form>
          <div className="error_msg">{errorMesage}</div>
        </div>
      </div>
    </>
  );
}

export default ContactUsSideBar;
