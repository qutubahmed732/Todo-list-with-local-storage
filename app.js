let todoList = JSON.parse(localStorage.getItem("list")) || [{
  name: 'Make Dinner',
  duedate: '2022-5-2'
}, {
  name: 'wash dishes',
  duedate: '2022-5-4'
}];

console.log(todoList);

function saveToStorage() {
  localStorage.setItem("list", JSON.stringify(todoList));
}

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(({name, duedate}, index) => {
    const html = `
      <div>${name}</div>
      <div>${duedate}</div>
      <button onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
      saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
};
renderTodoList();

function addTodo() {
  const inputElement = document.querySelector(".js-name-input")
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  if (!name && !dueDate) {
    alert("Please insert a value")
  } else {
    todoList.push({
      name,
      duedate: dueDate
    });
    saveToStorage();
    renderTodoList();
  }
  console.log(todoList);

  inputElement.value = "";
  dateInputElement.value = "";
}