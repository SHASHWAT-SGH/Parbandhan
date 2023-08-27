import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/Images/lo1.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming your sections have the 'section' tag
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll("section");
    const sectionTop = sections[index].offsetTop;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className="image">
        <img
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <ul className={active}>
        <li
          className={activeSection === 0 ? "active nav__item" : "nav__item"}
          onClick={() => scrollToSection(0)}
        >
          Home
        </li>
        <li
          className={activeSection === 1 ? "active nav__item" : "nav__item"}
          onClick={() => scrollToSection(1)}
        >
          Toppers
        </li>
        <li
          className={activeSection === 2 ? "active nav__item" : "nav__item"}
          onClick={() => scrollToSection(2)}
        >
          Courses
        </li>
        <li
          className={activeSection === 3 ? "active nav__item" : "nav__item"}
          onClick={() => scrollToSection(3)}
        >
          Testimonials
        </li>
        <li
          className={activeSection === 4 ? "active nav__item" : "nav__item"}
          onClick={() => scrollToSection(4)}
        >
          Universities
        </li>
        <li
          className={activeSection === 5 ? "active nav__item" : "nav__item"}
          onClick={() => scrollToSection(5)}
        >
          Join Us
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
