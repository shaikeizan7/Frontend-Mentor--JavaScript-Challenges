"use strict";

// tipAmount = Number(billValue) * (percentage / 100);
// totalAmount = billValue + tipAmount;

const billValue = document.getElementById("bill");
const peopleValue = document.getElementById("people");
const tipBtns = document.querySelectorAll(".tip-btn");
const customValue = document.querySelector(".custom-input");
const tipPrice = document.querySelector(".tip-price");
const totalPrice = document.querySelector(".total-price");
const resetBtn = document.querySelector(".reset");
const errorText = document.querySelector(".error-text");

tipBtns.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    if (peopleValue.value == 0) {
      errorText.classList.remove("hidden");
      peopleValue.classList.add("red-border");
    } else {
      tipBtns.forEach((b) => b.classList.remove("active")); // remove active from all
      btn.classList.add("active"); // add active to clicked
      const tipAmount = Number(billValue.value) * (e.target.dataset.tip / 100);
      // console.log(tipAmount);
      const totalAmount = Number(billValue.value) + tipAmount;
      tipPrice.textContent = `$${Number(tipAmount / peopleValue.value).toFixed(
        2
      )}`;
      totalPrice.textContent = `$${Number(
        totalAmount / peopleValue.value
      ).toFixed(2)}`;
      // });
      errorText.classList.add("hidden");
      peopleValue.classList.remove("red-border");
    }
  });
});

// for custom
customValue.addEventListener("click", function (e) {
  if (peopleValue.value == 0) {
    errorText.classList.remove("hidden");
    peopleValue.classList.add("red-border");
  } else {
    const tipAmount = Number(billValue.value) * (e.target.value / 100);
    const totalAmount = Number(billValue.value) + tipAmount;
    tipPrice.textContent = `$${Number(tipAmount / peopleValue.value).toFixed(
      2
    )}`;
    totalPrice.textContent = `$${Number(
      totalAmount / peopleValue.value
    ).toFixed(2)}`;
    // });
    errorText.classList.add("hidden");
    peopleValue.classList.remove("red-border");
  }
});

// Reset
resetBtn.addEventListener("click", function () {
  tipPrice.textContent = "$0.00";
  totalPrice.textContent = "$0.00";
  billValue.value = "";
  peopleValue.value = "";
  customValue.value = "";
  tipBtns.forEach((b) => b.classList.remove("active"));
  errorText.classList.add("hidden");
  peopleValue.classList.remove("red-border");
});
