'use strict';

/**
 * Navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// Navbar Toggle Event
const navToggleEvent = function (elem) {
  navElemArr.forEach(item => {
    item.addEventListener("click", () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  });
};

// Initialize nav toggle functionality
navToggleEvent();

// Scroll Event to manage header and button visibility
const header = document.querySelector("header");
const goTopBtn = document.querySelector("[data-go-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
