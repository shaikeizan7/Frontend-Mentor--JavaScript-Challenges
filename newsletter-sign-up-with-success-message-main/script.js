"use strict";

const thanksSec = document.querySelector(".thanks-section");
const mainSec = document.querySelector(".main-section");
const subscribeBtn = document.querySelector(".Subscribe-btn");
const dismissBtn = document.querySelector(".Dismiss-btn");

const form = document.getElementById("my-form");
const inputEmail = document.querySelector(".input-email");
const labelvalidrequired = document.querySelector(".label-validrequired");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = inputEmail.value.trim();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (isValidEmail) {
    mainSec.classList.add("hidden");
    thanksSec.classList.remove("hidden");
  } else {
    inputEmail.classList.add("error-class");
    labelvalidrequired.classList.remove("hidden");
  }
});

dismissBtn.addEventListener("click", function () {
  mainSec.classList.remove("hidden");
  thanksSec.classList.add("hidden");
  inputEmail.classList.remove("error-class");
  labelvalidrequired.classList.add("hidden");
  inputEmail.value = "";
});
