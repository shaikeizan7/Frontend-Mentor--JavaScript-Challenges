"use strict";

const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const itemNo = document.querySelector(".item-no");

const addtocartBtn = document.querySelector(".cart-btn");

const cartLogo = document.querySelector(".cart-logo");
const cartItems = document.querySelector(".cart-items");

const cartIcon = document.querySelector(".cart-icon");
const emptyCart = document.querySelector(".empty-cart");
const fillCart = document.querySelector(".fill-cart");

const quantityCount = document.querySelector(".quantity-count");
const price = document.querySelector(".price");
const deleteBtn = document.querySelector(".delete-btn");
const checkoutBtn = document.querySelector(".checkout-btn");

let count = 0;
let unitPrice = 125;

plusBtn.addEventListener("click", function () {
  if (count == 0) {
    count++;
    itemNo.textContent = count;
    cartLogo.classList.remove("hidden");
    cartItems.textContent = count;
    // fillCart.classList.remove("hidden");
    quantityCount.textContent = count;
    price.textContent = `${unitPrice * count}.00`;
  } else {
    count++;
    itemNo.textContent = count;
    cartItems.textContent = count;
    quantityCount.textContent = count;
    price.textContent = `${unitPrice * count}.00`;
  }
});

minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    itemNo.textContent = count;
    cartItems.textContent = count;
    quantityCount.textContent = count;
    price.textContent = `${price.textContent - unitPrice}.00`;
  } else {
    itemNo.textContent = 0;
  }
  if (count == 0) {
    cartLogo.classList.add("hidden");
    fillCart.classList.add("hidden");
  }
});

addtocartBtn.addEventListener("click", function () {
  count++;
  itemNo.textContent = count;
  cartLogo.classList.remove("hidden");
  cartItems.textContent = count;
  // fillCart.classList.remove("hidden");
  quantityCount.textContent = count;
  price.textContent = `${unitPrice * count}.00`;
});

// cart-icon and empty cart
cartIcon.addEventListener("mouseenter", function () {
  if (count == 0) emptyCart.classList.remove("hidden");
});

cartIcon.addEventListener("mouseleave", function () {
  emptyCart.classList.add("hidden");
});

cartIcon.addEventListener("click", function () {
  fillCart.classList.toggle("hidden");
});

// deleteBtn
deleteBtn.addEventListener("click", function () {
  fillCart.classList.add("hidden");
  cartLogo.classList.add("hidden");
  itemNo.textContent = `${(count = 0)}`;
  // cartItems.textContent = 0;
  // quantityCount.textContent = 0;
  // price.textContent = 0;
});

// checkout
checkoutBtn.addEventListener("click", () => {
  fillCart.classList.add("hidden");
  cartLogo.classList.add("hidden");
  itemNo.textContent = `${(count = 0)}`;
});

// product thumbnails
const thumbImages = document.querySelectorAll(".thumb-images");
const imagesBox = document.querySelectorAll(".imgs-border");

imagesBox.forEach((img) => {
  img.addEventListener("click", function () {
    imagesBox.forEach((img) => {
      img.classList.remove("border-2");
    });
    img.classList.add("border-2");
    img.classList.add("border-orange-500");

    thumbImages.forEach((imgs) => {
      imgs.addEventListener("click", () => {
        thumbImages.forEach((img) => {
          img.classList.remove("opacity-40");
        });
        imgs.classList.add("opacity-40");
      });
    });
  });
});

// product images
