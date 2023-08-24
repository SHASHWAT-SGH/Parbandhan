import React from "react";
// import "./navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/Images/lo1.png";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="navigation-links">
        <li className="first-level-navigation">
          <span className="active">hello</span>
        </li>
        <li className="first-level-navigation">
          <span>hello</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
        <li className="first-level-navigation">
          <span>hello menu</span>
        </li>
      </ul>

      {/* hamburger menu */}
      <span className="menu-logo">
        <MenuOutlined
          style={{
            color: "rgb(230,79,2)",
            fontSize: "2.5rem",
          }}
        />
      </span>
    </nav>
  );
}

export default Navbar;
