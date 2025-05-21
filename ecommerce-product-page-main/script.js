"use strict";

const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const itemNo = document.querySelector(".item-no");

const cartBtn = document.querySelector(".cart-btn");

const cartLogo = document.querySelector(".cart-logo");
const cartItems = document.querySelector(".cart-items");

let count = 0;
plusBtn.addEventListener("click", function () {
  if (count == 0) {
    count++;
    itemNo.textContent = count;
    cartLogo.classList.remove("hidden");
    cartItems.textContent = count;
  } else {
    count++;
    itemNo.textContent = count;
    cartItems.textContent = count;
  }
});

minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    itemNo.textContent = count;
    cartItems.textContent = count;
  } else {
    itemNo.textContent = 0;
  }
  if (count == 0) cartLogo.classList.add("hidden");
});

cartBtn.addEventListener("click", function () {
  count++;
  itemNo.textContent = count;
  cartLogo.classList.remove("hidden");
  cartItems.textContent = count;
});
