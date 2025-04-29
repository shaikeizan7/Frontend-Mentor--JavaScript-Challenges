"use strict";

const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit");

const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");
const email = document.querySelector(".email");
const query1 = document.querySelector(".query-1");
const query2 = document.querySelector(".query-2");
const textMsg = document.querySelector(".textmsg");
const consent = document.querySelector(".consent");

const erMsgfname = document.querySelector(".er-msg-1");
const erMsglname = document.querySelector(".er-msg-2");
const erMsgemail = document.querySelector(".er-msg-3");
const erMsgquery = document.querySelector(".er-msg-4");
const erMsgtextarea = document.querySelector(".er-msg-5");
const erMsgconsent = document.querySelector(".er-msg-6");

const successMsg = document.querySelector(".success-box");

const init = function () {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let isValid = true; // Track overall validation

    // First Name
    if (fName.value.trim() === "") {
      erMsgfname.classList.remove("hidden");
      fName.classList.add("error");
      isValid = false;
    } else {
      erMsgfname.classList.add("hidden");
      fName.classList.remove("error");
    }

    // Last Name
    if (lName.value.trim() === "") {
      erMsglname.classList.remove("hidden");
      lName.classList.add("error");
      isValid = false;
    } else {
      erMsglname.classList.add("hidden");
      lName.classList.remove("error");
    }

    // Email
    if (email.value.trim() === "") {
      erMsgemail.classList.remove("hidden");
      email.classList.add("error");
      isValid = false;
    } else {
      erMsgemail.classList.add("hidden");
      email.classList.remove("error");
    }

    // Radio buttons
    if (!query1.checked && !query2.checked) {
      erMsgquery.classList.remove("hidden");
      isValid = false;
    } else {
      erMsgquery.classList.add("hidden");
    }

    // Textarea
    if (textMsg.value.trim() === "") {
      erMsgtextarea.classList.remove("hidden");
      textMsg.classList.add("error");
      isValid = false;
    } else {
      erMsgtextarea.classList.add("hidden");
      textMsg.classList.remove("error");
    }

    // Consent Checkbox
    if (!consent.checked) {
      erMsgconsent.classList.remove("hidden");
      isValid = false;
    } else {
      erMsgconsent.classList.add("hidden");
    }

    // Final decision
    if (isValid) {
      successMsg.classList.remove("hidden");
      form.reset();
    } else {
      successMsg.classList.add("hidden");
    }
  });
};

init();
