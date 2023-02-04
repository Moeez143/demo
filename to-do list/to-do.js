// function to add a new to-do
function addTodo() {
    let todo = document.getElementById("new-todo").value;
    if (todo) {
      let todoList = document.getElementById("todo-list");
      let newTodo = document.createElement("li");
      newTodo.innerHTML = todo;
      newTodo.onclick = toggleComplete;
      todoList.appendChild(newTodo);
      document.getElementById("new-todo").value = "";
    }
  }
  
  // function to toggle the completion status of a to-do
  function toggleComplete() {
    this.classList.toggle("completed");
  }
  