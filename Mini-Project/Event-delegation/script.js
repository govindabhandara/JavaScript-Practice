const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Event delegation for delete buttons
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.closest("li");
    li.remove();
  }
});
