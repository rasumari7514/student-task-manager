function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  alert("Task added: " + task);
  input.value = "";
}
