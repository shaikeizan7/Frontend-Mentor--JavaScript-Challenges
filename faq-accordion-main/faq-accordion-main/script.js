// "use strict";

// const faqItems = document.querySelectorAll(".faq-item");

// const q1 = document.querySelector(".q1");
// const q2 = document.querySelector(".q2");
// const q3 = document.querySelector(".q3");
// const q4 = document.querySelector(".q4");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");

// // const btnP = document.querySelector(".btn-1-1");
// // const btnPl = document.querySelector(".btn-2-2");
// // const btnPlu = document.querySelector(".btn-3-3");
// // const btnPlus = document.querySelector(".btn-4-4");

// // const btnsPlus = [btnP, btnPl, btnPlu, btnPlus];

// const btns = [btn1, btn2, btn3, btn4];

// btns.forEach((btn, item) => {
//   btn.addEventListener("click", function () {
//     faqItems[item].classList.toggle("active");
//     // btn.classList.add("hidden");
//   });
// });

// refactoring.
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    const toggle = item.querySelector(".toggle");
    const answer = item.querySelector(".answer");

    if (item.classList.contains("active")) {
      toggle.innerHTML = `<img src="assets/images/icon-minus.svg" alt="Image">`;
      answer.style.display = "block";
    } else {
      toggle.innerHTML = `<img src="assets/images/icon-plus.svg" alt="Image">`;
      answer.style.display = "none";
    }
  });
});
