"use strict";

// import data from "./data.json";
// Your JSON data
const data = [
  {
    title: "Work",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  },
];

const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");

const cards = document.querySelectorAll(".card-bottom");

function updateCards(timeframe) {
  cards.forEach((card, index) => {
    // const title = card.querySelector(".title");
    const current = card.querySelector(".current");
    const previous = card.querySelector(".previous");

    // title.textContent = data[index].title;
    current.textContent = `${data[index].timeframes[timeframe].current}hrs`;
    previous.textContent = `Previous - ${data[index].timeframes[timeframe].previous}hrs`;
  });
}

// dailyBtn.addEventListener("click", function () {
//   updateCards("daily");
//   dailyBtn.classList.add("active");
//   weeklyBtn.classList.remove("active");
//   monthlyBtn.classList.remove("active");
// });

// weeklyBtn.addEventListener("click", function () {
//   updateCards("weekly");
//   weeklyBtn.classList.add("active");
//   dailyBtn.classList.remove("active");
//   monthlyBtn.classList.remove("active");
// });

// monthlyBtn.addEventListener("click", function () {
//   updateCards("monthly");
//   monthlyBtn.classList.add("active");
//   dailyBtn.classList.remove("active");
//   weeklyBtn.classList.remove("active");
// });

// Refactoring.
const buttons = [dailyBtn, weeklyBtn, monthlyBtn];

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const timeframe = button.id; // "daily", "weekly", "monthly"
    updateCards(timeframe);
    buttons.forEach((btn) => btn.classList.remove("active")); // Remove active from all
    button.classList.add("active"); // Add active to clicked button
  });
});
