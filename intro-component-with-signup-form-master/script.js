"use strict";

const form = document.getElementById("myform");

// const claimBtn = document.querySelector(".submit-btn");
const labelFname = document.querySelector(".label-fname");
const labelLname = document.querySelector(".label-lname");
const labelEmail = document.querySelector(".label-email");
const labelPassword = document.querySelector(".label-password");

const errorIcon1 = document.querySelector(".icon-1");
const errorIcon2 = document.querySelector(".icon-2");
const errorIcon3 = document.querySelector(".icon-3");
const errorIcon4 = document.querySelector(".icon-4");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // first name
  if (input1.value.trim() === "") {
    labelFname.classList.remove("hidden");
    errorIcon1.classList.remove("hidden");
    input1.classList.add("input-border");
    input1.classList.add("input-place");
  } else {
    input1.value = "";
  }

  // last Name
  if (input2.value.trim() === "") {
    labelLname.classList.remove("hidden");
    errorIcon2.classList.remove("hidden");
    input2.classList.add("input-border");
    input2.classList.add("input-place");
  } else {
    input2.value = "";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input3.value.trim())) {
    labelEmail.classList.remove("hidden");
    errorIcon3.classList.remove("hidden");
    input3.classList.add("input-border");
    input3.placeholder = "email@example/com";
    input3.classList.add("inputplace-email");
  } else {
    input3.value = "";
  }

  // password
  if (input4.value === "") {
    labelPassword.classList.remove("hidden");
    errorIcon4.classList.remove("hidden");
    input4.classList.add("input-border");
    input4.classList.add("input-place");
  } else {
    input4.value = "";
  }
  // form.onsubmit();
});
