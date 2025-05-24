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
  if (!count == 0) fillCart.classList.toggle("hidden");
});

// deleteBtn
deleteBtn.addEventListener("click", function () {
  fillCart.classList.add("hidden");
  cartLogo.classList.add("hidden");
  itemNo.textContent = `${(count = 0)}`;
  emptyCart.classList.remove("hidden");

  // cartItems.textContent = 0;
  // quantityCount.textContent = 0;
  // price.textContent = 0;
});

// checkout
checkoutBtn.addEventListener("click", () => {
  fillCart.classList.add("hidden");
  cartLogo.classList.add("hidden");
  itemNo.textContent = `${(count = 0)}`;
  emptyCart.classList.remove("hidden");
});

// product thumbnails
const thumbImages = document.querySelectorAll(".thumb-images");
const imagesBox = document.querySelectorAll(".imgs-border");
const mainImg = document.getElementById("main-img");

imagesBox.forEach((imgBox, index) => {
  imgBox.addEventListener("click", () => {
    // Remove borders from all image boxes
    imagesBox.forEach((box) => {
      box.classList.remove("border-2", "border-orange-500");
    });

    // Remove opacity from all thumbnail images
    thumbImages.forEach((img) => {
      img.classList.remove("opacity-40");
    });

    // Add border to the clicked box
    imgBox.classList.add("border-2", "border-orange-500");
    // Add opacity to the clicked image
    thumbImages[index].classList.add("opacity-40");

    mainImg.src = lightProductSrcs[index];
  });
});

// lightbox  product thumbnails
// Selectors
const lightthumbImages = document.querySelectorAll(".light-thumb-images");
const lightimagesBox = document.querySelectorAll(".light-imgs-border");
const productImgs = document.querySelectorAll(".product-imgs");
const mainImage = document.getElementById("main-image");

const lightBox = document.querySelector(".light-box");
const closeBtn = document.querySelector(".close-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

const lightProductSrcs = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

let currentIndex = 0;

// Function to update main image and thumbnail styling
function updateLightbox(index) {
  currentIndex = index;

  // Update main image
  mainImage.src = lightProductSrcs[index];

  // Reset all thumbnails
  lightimagesBox.forEach((box) =>
    box.classList.remove("border-2", "border-orange-500")
  );
  lightthumbImages.forEach((img) => img.classList.remove("opacity-45"));

  // Highlight selected thumbnail
  lightimagesBox[index].classList.add("border-2", "border-orange-500");
  lightthumbImages[index].classList.add("opacity-45");
}

// Add click event to each thumbnail
lightimagesBox.forEach((imgBox, index) => {
  imgBox.addEventListener("click", () => {
    updateLightbox(index);
  });
});

// Open lightbox on main product image click
productImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    updateLightbox(index); // Optional: match clicked image
    lightBox.classList.remove("hidden");
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightBox.classList.add("hidden");
});

// Next Button
nextBtn.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % lightProductSrcs.length;
  updateLightbox(newIndex);
});

// Previous Button
previousBtn.addEventListener("click", () => {
  const newIndex =
    (currentIndex - 1 + lightProductSrcs.length) % lightProductSrcs.length;
  updateLightbox(newIndex);
});
