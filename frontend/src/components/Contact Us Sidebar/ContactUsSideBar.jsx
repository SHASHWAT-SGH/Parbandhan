import React, { useState } from "react";
import "./contactUsSideBar.css";

function ContactUsSideBar() {
  const [showContact, setShowContact] = useState(false);

  const fadeInAnimation = () => {
    document
      .querySelector(".contact-us-sidebar-wrapper .open-btn")
      .addEventListener("click", () => {
        const messageElement = document.querySelector(
          ".contact-us-modal-wrapper"
        );
        messageElement.style.display = "inline-block";
        messageElement.classList.remove("fadeout");
        messageElement.classList.add("fadein");
        messageElement.addEventListener("animationend", () => {
          messageElement.classList.remove("fadein");
          messageElement.style.display = "block";
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

  return (
    <>
      <div
        className="contact-us-sidebar-wrapper"
        onClick={() => {
          fadeInAnimation();
          setShowContact(true);
        }}
      >
        <div className="open-btn">Contact Us</div>
      </div>

      <div
        className="contact-us-modal-wrapper"
        style={{ display: showContact ? "flex" : "none" }}
      >
        <div className="contact-us-modal">
          <span
            className="cross"
            onClick={() => {
              setShowContact(false);
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
          <form action="">
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                id="fname"
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                id="lname"
                type="text"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="abc@example.com" />
            </div>

            <div>
              <label htmlFor="phone">Mobile Number</label>
              <input id="phone" type="tel" placeholder="1234567890" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUsSideBar;
