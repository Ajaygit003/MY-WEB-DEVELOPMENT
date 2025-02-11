//Load tasks from localStorage on page load
window.onload = function () {
  loadTasks();
};

function addTask() {
  let taskInput = document.getElementById("newTask");
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    // Create task text
    let textNode = document.createElement("span");
    textNode.textContent = taskText;
    textNode.classList.add("task-text");
    // click ontext for edit text
    // textNode.onclick = function () {
    //   editTask(textNode);
    // }; 
    li.appendChild(textNode);

    // Create Edit Button
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      editTask(textNode);
    }; 
    li.appendChild(editBtn);

    // Create Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      deleteTask(li);
    }; 
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding

    // Save tasks to localStorage
    saveTasks();
  }
}

function editTask(taskTextElement) {
  let originalText = taskTextElement.textContent;

  // Replace text with an input element
  let input = document.createElement("input");
  input.value = originalText;

  // When the input loses focus, save the changes
  input.onblur = function () {
    taskTextElement.textContent = input.value.trim();
    saveTasks(); // Save tasks to localStorage after editing
  };

  taskTextElement.innerHTML = ""; // Clear the existing text
  taskTextElement.appendChild(input); // Add the input field
  input.focus(); // Automatically focus on the input field
}

function deleteTask(taskItem) {
  taskItem.remove();
  saveTasks(); // Save tasks to localStorage after deletion
}

function saveTasks() {
  let taskList = document.getElementById("taskList");
  let tasks = [];

  // Loop through all task list items and store their text
  for (let i = 0; i < taskList.children.length; i++) {
    let task = taskList.children[i];
    let taskText = task.querySelector(".task-text").textContent;
    tasks.push(taskText);
  }

  // Save tasks to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Load tasks from localStorage and display them
  tasks.forEach(function (taskText) {
    let li = document.createElement("li");

    // Create task text
    let textNode = document.createElement("span");
    textNode.textContent = taskText;
    textNode.classList.add("task-text");
    textNode.onclick = function () {
      editTask(textNode);
    };
    li.appendChild(textNode);

    // Create Edit Button
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      editTask(textNode);
    };
    li.appendChild(editBtn);

    // Create Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      deleteTask(li);
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}


