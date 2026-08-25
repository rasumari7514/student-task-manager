function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const priority = document.getElementById("priority");
  const dueDate = document.getElementById("dueDate");

  const task = input.value.trim();
  const selectedPriority = priority.value;
  const selectedDate = dueDate.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  if (selectedDate === "") {
    alert("Please select a due date");
    return;
  }

  const li = document.createElement("li");

  li.textContent =
    task + " - " + selectedPriority + " Priority - Due: " + selectedDate + " ";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.onclick = function(event) {
    event.stopPropagation();
    li.remove();
  };

  li.appendChild(deleteButton);

  li.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  taskList.appendChild(li);

  input.value = "";
  dueDate.value = "";
}
checkDeadline();
function checkDeadline() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = document.getElementById("dueDate").value;

  if (dueDate === "") {
    return;
  }

  const selectedDate = new Date(dueDate);
  selectedDate.setHours(0, 0, 0, 0);

  const difference = selectedDate - today;
  const daysLeft = difference / (1000 * 60 * 60 * 24);

  if (daysLeft === 0) {
    alert("⚠️ Your task is due today!");
  } else if (daysLeft === 1) {
    alert("🔔 Your task is due tomorrow!");
  }
}
