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

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";

  completeButton.onclick = function(event) {
  event.stopPropagation();
  li.style.textDecoration = "line-through";
  completeButton.textContent = "Completed";
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

  input.value = "";
  dueDate.value = "";
}
