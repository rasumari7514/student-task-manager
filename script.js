function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const priority = document.getElementById("priority");

  const task = input.value.trim();
  const selectedPriority = priority.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.textContent = task + " - " + selectedPriority + " Priority ";

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
}
