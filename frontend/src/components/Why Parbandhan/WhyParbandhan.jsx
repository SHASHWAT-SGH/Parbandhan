import "./whyParbandhan.css";
// import "./selectInput.js";

function WhyParbandhan() {
  return (
    <section className="whyparbandhan" id="joinUs">
      <div className="outer-heading">
        Why Parbandhan Career Institute?
        <br />
        <span>Join With Us</span>
      </div>

      <div className="forms-container">
        <div className="left">
          <div className="heading">GET PERSONALISED COUNSELLING</div>

          {/* custom select start */}
          <label>
            <select>
              <option>Select Program</option>
              <option>Crash Course</option>
              <option>One Year Program</option>
              <option>Two Year Program</option>
              <option>Hybrid Program</option>
              <option>Non Classroom Program</option>
              <option>International Education</option>
            </select>
          </label>
          {/* custom select ends */}
          {/* custom select start */}
          <label>
            <select>
              <option>Select Course</option>
              <option>Management(BMS/BBE/BBA(FIA)/BBA/IIM-I)</option>
              <option>Mass Communication</option>
              <option>Hotel Management </option>
              <option>B.Com</option>
              <option>Economics</option>
              <option>BCA</option>
              <option>Financial Courses</option>
            </select>
          </label>
          {/* custom select ends */}

          <div className="input-containers-2-element">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              className="text-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              className="text-input"
            />
          </div>

          <div className="input-containers-2-element">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="text-input"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="text-input"
            />
          </div>

          <div className="input-containers-2-element">
            <input
              type="text"
              placeholder="City"
              name="city"
              className="text-input"
            />
            <input
              type="text"
              placeholder="School"
              name="school"
              className="text-input"
            />
          </div>
          {/* custom select start */}
          <label>
            <select>
              <option>Select Class</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </label>
          {/* custom select ends */}
          <div className="btn-container">
            <span className="submit-btn">Submit</span>
          </div>
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
