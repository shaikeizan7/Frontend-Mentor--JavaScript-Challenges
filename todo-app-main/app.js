// const input = document.getElementById("todo-input");
// const list = document.getElementById("todo-list");
// const filters = document.querySelectorAll(".filter-btn");
// const clearBtn = document.getElementById("clear-completed");
// const itemsLeft = document.getElementById("items-left");

// let todos = [];
// console.log(todos);
// let currentFilter = "all";

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && input.value.trim()) {
//     todos.push({ text: input.value.trim(), completed: false });
//     input.value = "";
//     render();
//   }
// });

// list.addEventListener("click", (e) => {
//   const id = e.target.closest("li")?.dataset.id;
//   if (!id) return;

//   if (e.target.matches(".toggle")) {
//     todos[id].completed = !todos[id].completed;
//   } else if (e.target.matches(".delete")) {
//     todos.splice(id, 1);
//   }

//   render();
// });

// filters.forEach((btn) =>
//   btn.addEventListener("click", () => {
//     currentFilter = btn.dataset.filter;
//     document
//       .querySelectorAll(".filter-btn")
//       .forEach((b) => b.classList.remove("text-white"));
//     btn.classList.add("text-white");
//     render();
//   })
// );

// clearBtn.addEventListener("click", () => {
//   todos = todos.filter((todo) => !todo.completed);
//   render();
// });

// function render() {
//   list.innerHTML = "";

//   let filtered = todos;
//   if (currentFilter === "active") {
//     filtered = todos.filter((t) => !t.completed);
//   } else if (currentFilter === "completed") {
//     filtered = todos.filter((t) => t.completed);
//   }

//   filtered.forEach((todo, i) => {
//     const li = document.createElement("li");
//     li.dataset.id = i;
//     li.className = "flex items-center justify-between p-3 rounded bg-gray-800";
//     li.innerHTML = `
//       <div class="flex items-center gap-2">
//         <input type="checkbox" class="toggle" ${
//           todo.completed ? "checked" : ""
//         }/>
//         <span class="${todo.completed ? "line-through text-gray-400" : ""}">${
//       todo.text
//     }</span>
//       </div>
//       <button class="delete text-red-400 hover:text-red-600">Delete</button>
//     `;
//     list.appendChild(li);
//   });

//   const activeCount = todos.filter((t) => !t.completed).length;
//   itemsLeft.textContent = `${activeCount} item${
//     activeCount !== 1 ? "s" : ""
//   } left`;
// }

// updated code
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const filters = document.querySelectorAll(".filter-btn");
const clearBtn = document.getElementById("clear-completed");
const itemsLeft = document.getElementById("items-left");

let todos = [];
let currentFilter = "all";

function addTodo() {
  const value = input.value.trim();
  if (value) {
    todos.unshift({ text: value, completed: false });
    input.value = "";
    render();
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

addBtn.addEventListener("click", addTodo);

list.addEventListener("click", (e) => {
  const id = e.target.closest("li")?.dataset.id;
  if (id === undefined) return;

  if (e.target.matches(".toggle")) {
    todos[id].completed = !todos[id].completed;
    render();
  } else if (e.target.matches(".delete")) {
    todos.splice(id, 1);
    render();
  } else if (e.target.matches(".edit")) {
    const li = e.target.closest("li");
    const span = li.querySelector(".todo-text");
    const oldText = span.textContent;

    // Replace span with an input
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = oldText;
    inputEdit.className = "flex-1 px-2 py-2 rounded bg-white text-black";
    span.replaceWith(inputEdit);
    inputEdit.focus();

    // Save on blur or Enter
    const save = () => {
      const newText = inputEdit.value.trim();
      if (newText) {
        todos[id].text = newText;
      }
      render();
    };

    inputEdit.addEventListener("blur", save);
    inputEdit.addEventListener("keydown", (e) => {
      if (e.key === "Enter") inputEdit.blur();
    });
  }
});

filters.forEach((btn) =>
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("text-white"));
    btn.classList.add("text-white");
    render();
  })
);

clearBtn?.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  render();
});

function render() {
  list.innerHTML = "";

  let filtered = todos;
  if (currentFilter === "active") {
    filtered = todos.filter((t) => !t.completed);
  } else if (currentFilter === "completed") {
    filtered = todos.filter((t) => t.completed);
  }

  filtered.forEach((todo, i) => {
    const li = document.createElement("li");
    li.dataset.id = i;
    li.className = "flex items-center justify-between p-3 rounded bg-gray-800";

    li.innerHTML = `
      <div class="flex items-center gap-2 w-full">
        <input type="checkbox" class="toggle" ${
          todo.completed ? "checked" : ""
        }/>
        <span class="todo-text flex-1 ${
          todo.completed ? "line-through text-gray-400" : ""
        }">${todo.text}</span>
      </div>
      <div class="flex items-center gap-2">
        <button class="edit text-blue-400 hover:text-blue-600">✏️</button>
        <button class="delete text-red-400 hover:text-red-600">🗑️</button>
      </div>
    `;

    list.appendChild(li);
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  itemsLeft.textContent = `${activeCount} item${
    activeCount !== 1 ? "s" : ""
  } left`;
}

render();
