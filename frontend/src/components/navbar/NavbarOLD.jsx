import React from "react";
import "./navbarOLD.css";
import logo from "../../assets/Images/lo1.png";
import { CaretDownOutlined } from "@ant-design/icons";
import navbarContents from "../../other/navbar-contents";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <label for="drop" class="toggle">
          &#8801; Menu
        </label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <a href="!">Home</a>
          </li>
          <li>
            {/* <!-- First Tier Drop Down --> */}
            <label for="drop-1" class="toggle">
              Service +
            </label>
            <a href="!">Service</a>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <a href="!">Service 1</a>
              </li>
              <li>
                <a href="!">Service 2</a>
              </li>
              <li>
                <a href="!">Service 3</a>
              </li>
            </ul>
          </li>
          <li>
            {/* <!-- First Tier Drop Down --> */}
            <label for="drop-2" class="toggle">
              Portfolio +
            </label>
            <a href="!">Portfolio</a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <a href="!">Portfolio 1</a>
              </li>
              <li>
                <a href="!">Portfolio 2</a>
              </li>
              <li>
                {/* Second Tier Drop Down */}
                <label for="drop-3" class="toggle">
                  Works +
                </label>
                <a href="!">Works</a>
                <input type="checkbox" id="drop-3" />
                <ul>
                  <li>
                    <a href="!">HTML/CSS</a>
                  </li>
                  <li>
                    <a href="!">jQuery</a>
                  </li>
                  <li>
                    <a href="!">Python</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="!">Blog</a>
          </li>
          <li>
            <a href="!">Submit</a>
          </li>
          <li>
            <a href="!">Contact</a>
          </li>
          <li>
            <a href="!">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
