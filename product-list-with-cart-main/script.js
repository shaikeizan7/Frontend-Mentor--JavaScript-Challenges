"use strict";

//  1. Data Management
// Maintain a central cart array to track items added to the cart. Each item should have properties like id, name, price, quantity, and image.

const addButtons = document.querySelectorAll(".add-btn");

let cart = [];

// 2. Fetching and Displaying Products
// Fetch product data from data.json and render them dynamically.

fetch("data.json")
  .then((response) => response.json())
  .then((res) => {
    const products = res.products;
    renderProducts(products);
  });

// 3. Rendering Products
// Create a function to render products on the page.

function renderProducts(products) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  products.forEach((product, index) => {
    const productHTML = `
        <div class="product relative flex flex-col gap-8" data-id="${
          product.id
        }" >
          <img src="${product.image.desktop}" alt="${
      product.name
    }" class="w-64 img-border rounded-lg shadow-md" />
          <button class="cart-btn rounded-full px-6 py-2.5 w-40 border-2 text-sm border-gray-300 font-semibold flex gap-2 absolute bg-white top-56 left-12 shadow-sm hover:border-amber-700 hover:text-amber-700">
            <img src="assets/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
          <div class="add-btn hidden rounded-full px-3 py-2.5 text-sm font-semibold items-center justify-between w-40 absolute shadow-sm bg-red-600 border-2 border-red-600 top-56 left-12">
            <button class="minus-btn border-2 border-white p-1 h-5 w-5 rounded-full text-white text-xl flex items-center justify-center hover:bg-white hover:text-red-700">-</button>
            <span class="text-white text-md item-no">1</span>
            <button class="plus-btn border-2 border-white p-1 h-5 w-5 rounded-full text-white text-xl flex items-center justify-center hover:bg-white hover:text-red-700">+</button>
          </div>
          <div class="space-y-0.5">
            <p class="text-xs font-normal text-gray-600">${product.category}</p>
            <p class="text-sm font-semibold">${product.name}</p>
            <p class="text-sm text-amber-700 font-bold">$${product.price.toFixed(
              2
            )}</p>
          </div>
        </div>
      `;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });

  attachEventListeners(products);
}

// 4. Attaching Event Listeners
// After rendering products, attach event listeners to handle user interactions.
function attachEventListeners(products) {
  const cartButtons = document.querySelectorAll(".cart-btn");
  const addButtons = document.querySelectorAll(".add-btn");

  cartButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.classList.add("hidden");
      addButtons[index].classList.remove("hidden");
      addButtons[index].classList.add("flex");

      // add border to img
      const imgBorder = btn.closest(".product").querySelector(".img-border");
      imgBorder.classList.add("block", "border-2", "border-red-500");

      const product = products[index];
      addToCart(product);
    });
  });

  addButtons.forEach((addBtn, index) => {
    const minusBtn = addBtn.querySelector(".minus-btn");
    const plusBtn = addBtn.querySelector(".plus-btn");
    const itemNo = addBtn.querySelector(".item-no");

    minusBtn.addEventListener("click", () => {
      const product = products[index];
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        itemNo.textContent = cartItem.quantity;
      } else {
        cart = cart.filter((item) => item.id !== product.id);
        addBtn.classList.add("hidden");
        cartButtons[index].classList.remove("hidden");

        // border remove
        const imgBorder = minusBtn
          .closest(".product")
          .querySelector(".img-border");
        imgBorder.classList.remove("block", "border-2", "border-red-500");
      }
      updateCartDisplay();
    });

    plusBtn.addEventListener("click", () => {
      const product = products[index];
      const cartItem = cart.find((item) => item.id === product.id);
      cartItem.quantity++;
      itemNo.textContent = cartItem.quantity;
      updateCartDisplay();
    });
  });
}

// 5. Adding Items to Cart
function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartDisplay();
}

// 6. Updating Cart Display
const cartList = document.querySelector(".cart-list");
const productNo = document.querySelector(".product-no");
const emptyCart = document.querySelector(".empty-cart");
const fillCart = document.querySelector(".fill-cart");

function updateCartDisplay() {
  cartList.innerHTML = "";

  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    fillCart.classList.add("hidden");
    productNo.textContent = "0";
    return;
  }

  emptyCart.classList.add("hidden");
  fillCart.classList.remove("hidden");

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    const cartItemHTML = `
      <div class="cart-item flex items-center justify-between">
        <div class="space-y-1">
          <p class="font-semibold text-sm">${item.name}</p>
          <div class="flex gap-4">
            <p class="text-sm font-semibold text-amber-700">${
              item.quantity
            }x</p>
            <div class="flex gap-2">
              <p class="text-sm text-gray-500">@$${item.price.toFixed(2)}</p>
              <p class="text-sm text-amber-700 font-semibold">$${(
                item.price * item.quantity
              ).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <button class="delete-btn border p-0.5 w-4 h-4 border-gray-500 rounded-full hover:bg-gray-700" data-id="${
          item.id
        }">
          <img src="assets/images/icon-remove-item.svg" alt="Remove" />
        </button>
      </div>
      <hr class="w-full border-t border-gray-200 mx-auto" />
    `;
    cartList.insertAdjacentHTML("afterbegin", cartItemHTML);
  });

  document.querySelector(".order-total").textContent = `$${total.toFixed(2)}`;
  productNo.textContent = cart.length.toString();

  attachDeleteEventListeners();
}

// 7. Deleting Items from Cart
function attachDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      cart = cart.filter((item) => item.id !== id);

      // Find the product and delete
      const productCard = document.querySelector(`.product[data-id="${id}"]`);

      if (productCard) {
        // Remove red border from image
        const productImg = productCard.querySelector("img");
        productImg?.classList.remove("border-2", "border-red-500");
      }

      // Show the "Add to Cart" button again
      const addBtn = productCard.querySelector(".add-btn");
      addBtn?.classList.add("hidden");
      const cartBtn = productCard.querySelector(".cart-btn");
      cartBtn?.classList.remove("hidden");

      updateCartDisplay();
    });
  });
}

// 8. Confirming and Starting New Orders
const orderBtn = document.querySelector(".order-btn");
const confirmOrder = document.querySelector(".confirm-order");
const newOrderBtn = document.querySelector(".neworder-btn");

orderBtn.addEventListener("click", () => {
  confirmOrder.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  const confirmOrderlist = document.querySelector(".confirmed-items");
  // confirm order section
  confirmOrderlist.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    const cartItemHTML = `<div class="confirmed-order flex items-center justify-between">
      <div class="flex items-center justify-center gap-2">
      <img
        src="${item.image.thumbnail}"
        class="w-10 rounded-sm"
        alt=""
      />
      <div class="space-y-1">
        <p class="font-semibold text-xs">${item.name}</p>
        <div class="flex gap-4">
          <p class="text-xs font-semibold text-amber-700">${item.quantity}x</p>
          <div class="flex gap-2">
            <p class="text-xs text-gray-500">@$${item.price}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="font-semibold text-sm text-gray-600">$${(
      item.price * item.quantity
    ).toFixed(2)}</p>
  </div>
  <hr class="w-full border-t border-gray-200 mx-auto" />`;
    confirmOrderlist.insertAdjacentHTML("afterbegin", cartItemHTML);
  });

  document.querySelector(".order-totals").textContent = `$${total.toFixed(2)}`;
  // productNo.textContent = cart.length.toString();
});

// start new order
newOrderBtn.addEventListener("click", () => {
  confirmOrder.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  cart = [];
  const addButtons = document.querySelectorAll(".add-btn");
  addButtons.forEach((btn) => {
    btn.classList.add("hidden");
  });
  const cartButtons = document.querySelectorAll(".cart-btn");
  cartButtons.forEach((btn) => {
    btn.classList.remove("hidden");
  });
  // border remove from all
  const imgBorder = document.querySelectorAll(".img-border");
  imgBorder.forEach((border) => {
    border.classList.remove("block", "border-2", "border-red-500");
  });
  updateCartDisplay();
});
