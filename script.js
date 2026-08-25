function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);

  input.value = "";
}
