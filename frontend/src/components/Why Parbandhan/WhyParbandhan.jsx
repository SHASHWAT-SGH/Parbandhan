import { useState } from "react";
import "./whyParbandhan.css";
import axios from "axios";

function WhyParbandhan() {
  const [errorMesage, setErrorMesage] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMesage("Sending...");
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID_COUNSELLING;
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
    <section className="whyparbandhan" id="joinUs">
      <div className="outer-heading">
        Why Parbandhan Career Institute?
        <br />
        <span>Join With Us</span>
      </div>

      <div className="forms-container">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <div className="heading">GET PERSONALISED COUNSELLING</div>

            {/* custom select start */}
            <label>
              <select name="program" onChange={handleChange}>
                <option>Select Program</option>
                <option value={"One Year Program"}>One Year Program</option>
                <option value={"Two Year Program"}>Two Year Program</option>
                <option value={"Crash Course"}>Crash Course</option>
              </select>
            </label>
            {/* custom select ends */}
            {/* custom select start */}
            {/* <label>
            <select>
              <option>Select Course</option>
              <option>One Year Program</option>
              <option>Two Year Program</option>
              <option>Crash Course</option>
            </select>
            </label> */}
            {/* custom select ends */}

            <div className="input-containers-2-element">
              <input
                required
                type="text"
                placeholder="First Name"
                name="fname"
                className="text-input"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                name="lname"
                className="text-input"
                onChange={handleChange}
              />
            </div>

            <div className="input-containers-2-element">
              <input
                required
                type="text"
                placeholder="Phone"
                name="phone"
                className="text-input"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="text-input"
                onChange={handleChange}
              />
            </div>

            <div className="input-containers-2-element">
              <input
                required
                type="text"
                placeholder="City"
                name="city"
                className="text-input"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="School"
                name="school"
                className="text-input"
                onChange={handleChange}
              />
            </div>
            {/* custom select start */}
            <label>
              <select name="class" onChange={handleChange} required>
                <option>Select Class</option>
                <option value={"10th"}>10th</option>
                <option value={"11th"}>11th</option>
                <option value={"12th"}>12th</option>
              </select>
            </label>
            {/* custom select ends */}
            <div className="btn-container">
              {/* <span className="submit-btn" onClick={handleSubmit}>
                Submit
              </span> */}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
          <div className="error_msg">{errorMesage}</div>
        </div>

        <div className="right">
          <div className="first-line">Limited time offer</div>
          <div className="second-line">
            Welcome to Parbandhan Career Institute {"–"} A Gurukul for
            Undergraduate Entrance Preparation.
          </div>
          <div className="main-content">
            Progams are arranged to focus on the smallest insights, creating a
            problem solving environment and excelling in all the methods to get
            the desired score.
          </div>
          <div className="btn-container">
            <span className="enroll-btn">ENROLL NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyParbandhan;
