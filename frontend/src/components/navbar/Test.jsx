import React from "react";
// import "./test.css";
function Test() {
  function mobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  return (
    <header class="header">
      <nav class="navbar">
        <a href="!" class="nav-logo">
          WebDev.
        </a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="!" class="nav-link" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li class="nav-item">
            <a href="!" class="nav-link" onClick={closeMenu}>
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a href="!" class="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="!" class="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div class="hamburger" onClick={mobileMenu}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Test;
