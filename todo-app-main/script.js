"use strict";

// Dark and light mode
const html = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");
const darklogo = document.querySelector(".darklogo");
const lightlogo = document.querySelector(".lightlogo");
const section = document.querySelector(".section");

// 1. Load sabg-deskto-lighteme from localStorage
const theme = localStorage.getItem("theme");
if (theme === "dark") {
  html.classList.add("dark");
}

// 2. Toggle dark mode and update localStorage
toggleBtn.addEventListener("click", () => {
  lightlogo.classList.toggle("hidden");
  darklogo.classList.toggle("hidden");
  section.classList.toggle("desktop-dark");
  section.classList.toggle("desktop-light");

  html.classList.toggle("dark");
  const currentTheme = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

// Todo functionality

const addBtn = document.querySelector(".add-btn");
const inputData = document.querySelector(".input-text");

const listContainer = document.querySelector(".list-container");
const itemNo = document.querySelector(".item-no");

// let tasks = [];
let count = 1;
addBtn.addEventListener("click", function () {
  const html = `
  <div class="task-div flex items-center gap-4 p-3">
            <div
              class="btn-div flex items-center justify-center ring-gray-300 ring-2 w-4 h-4 rounded-full left-4 top-[13px] cursor-pointer hover:ring-sky-400  ml-1.5"
            >
              <img src="images/icon-check.svg" alt="" class="h-2 w-2 hidden complete-btn" />
            </div>
            <p class="task-item text-lg">${inputData.value}</p>
          </div>
          <div class="border border-gray-900"></div>`;

  if (!inputData.value == "") {
    listContainer.insertAdjacentHTML("afterbegin", html);
    itemNo.textContent = count++;
  }
  inputData.value = "";
  // tasks.push(html);
  // console.log(tasks);
});

// complete btn
document.querySelector(".list-container").addEventListener("click", (e) => {
  const btnDiv = e.target.closest(".btn-div");

  if (!btnDiv) return;
  // console.log(btnDiv);

  // complete btn
  if (btnDiv) {
    const completeBtn = btnDiv.querySelector(".complete-btn");
    // console.log(completeBtn);
    completeBtn.classList.toggle("hidden");

    const taskDiv = e.target.closest(".task-div");
    const taskItem = taskDiv.querySelector(".task-item");
    taskItem.classList.toggle("line-through");
    taskItem.classList.toggle("text-gray-500");
    btnDiv.classList.toggle("bg-sky-500");
    // itemNo.textContent = count--;
  }
});

// All
const allBtn = document.querySelector(".all-btn");
console.log(allBtn);
allBtn.addEventListener("click", () => {
  allBtn.classList.add("dark:text-blue-500");
  activeBtn.classList.remove("dark:text-blue-500");
  completedTaskBtn.classList.remove("dark:text-blue-500");
  clearCompleted.classList.remove("dark:text-blue-500");

  const allTasks = document.querySelectorAll(".task-div");
  allTasks.forEach((task) => {
    task.style.display = "flex";
  });
});

// Active
const activeBtn = document.querySelector(".active-tasks");
activeBtn.addEventListener("click", () => {
  activeBtn.classList.add("dark:text-blue-500");
  allBtn.classList.remove("dark:text-blue-500");
  completedTaskBtn.classList.remove("dark:text-blue-500");
  clearCompleted.classList.remove("dark:text-blue-500");

  const allTasks = document.querySelectorAll(".task-div");
  allTasks.forEach((task) => {
    const completeIcon = task.querySelector(".complete-btn");
    if (completeIcon && completeIcon.classList.contains("hidden")) {
      // Task is active (not completed)
      task.style.display = "flex"; // or block, depending on layout
      itemNo.textContent = allTasks.length - 1;
    } else {
      // Task is completed
      task.style.display = "none";
    }
  });
});

// completed
const completedTaskBtn = document.querySelector(".completed-task-btn");

completedTaskBtn.addEventListener("click", () => {
  completedTaskBtn.classList.add("dark:text-blue-500");
  activeBtn.classList.remove("dark:text-blue-500");
  allBtn.classList.remove("dark:text-blue-500");
  clearCompleted.classList.remove("dark:text-blue-500");

  const allTasks = document.querySelectorAll(".task-div");
  allTasks.forEach((task) => {
    const completeIcon = task.querySelector(".complete-btn");
    if (!completeIcon.classList.contains("hidden")) {
      // Task is completed
      task.style.display = "flex";
      itemNo.textContent = allTasks.length - 1;
    } else {
      task.style.display = "none";
    }
  });
});

// Clear completed

const clearCompleted = document.querySelector(".clear-completed");
clearCompleted.addEventListener("click", function () {
  completedTaskBtn.classList.remove("dark:text-blue-500");
  activeBtn.classList.remove("dark:text-blue-500");
  allBtn.classList.remove("dark:text-blue-500");
  clearCompleted.classList.add("dark:text-blue-500");

  const allTasks = document.querySelectorAll(".task-div");
  allTasks.forEach((task) => {
    const completeIcon = task.querySelector(".complete-btn");
    if (completeIcon.classList.contains("hidden")) {
      // Task is completed
      task.style.display = "none";
      itemNo.textContent = allTasks.length - 1;
    } else {
      task.style.display = "none";
    }
  });
});
