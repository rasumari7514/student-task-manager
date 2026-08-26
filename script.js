function updateStats() {
  const total = document.querySelectorAll("#taskList li").length;
  const completed = document.querySelectorAll("#taskList li.completed").length;
  const pending = total - completed;

  document.getElementById("totalTasks").textContent = total;
  document.getElementById("completedTasks").textContent = completed;
  document.getElementById("pendingTasks").textContent = pending;
}
function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const priority = document.getElementById("priority");
  const dueDate = document.getElementById("dueDate");

  const task = input.value.trim();
  const selectedPriority = priority.value;
  const selectedDate = dueDate.value;

  const description = document.getElementById("taskDescription").value.trim();
  
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  if (selectedDate === "") {
    alert("Please select a due date");
    return;
  }

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent =
  task + " - " + selectedPriority +
  " Priority - Due: " + selectedDate +
  " - " + description;

  li.appendChild(taskText);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  editButton.onclick = function(event) {
    event.stopPropagation();

    const newTask = prompt("Edit your task:", task);

    if (newTask !== null && newTask.trim() !== "") {
     taskText.textContent =
  newTask.trim() + " - " + selectedPriority +
  " Priority - Due: " + selectedDate +
  " - " + description;
    }
  };

  li.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

deleteButton.onclick = function(event) {
  event.stopPropagation();
  li.remove();
  updateStats();
};
  
  li.appendChild(deleteButton);

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";

  completeButton.onclick = function(event) {
  event.stopPropagation();
  li.style.textDecoration = "line-through";
  li.classList.add("completed");
  completeButton.textContent = "Completed";
  updateStats();
};

  li.appendChild(completeButton);

  if (selectedPriority === "High") {
    li.style.color = "red";
  } else if (selectedPriority === "Medium") {
    li.style.color = "orange";
  } else {
    li.style.color = "green";
  }

  taskList.appendChild(li);

  updateStats();
  
  input.value = "";
  dueDate.value = "";
      }
