

let todoList = JSON.parse(localStorage.getItem("list")) || [{
  name: 'Make Dinner',
  duedate: '2022-5-2'
}, {
  name: 'wash dishes',
  duedate: '2022-5-4'
}];

console.log(todoList);
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, duedate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${duedate}</div>
      <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  }
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
    renderTodoList();
    saveToStorage();
  }
  console.log(todoList);

  inputElement.value = "";
  dateInputElement.value = "";
}

function saveToStorage (){
    localStorage.setItem("list", JSON.stringify(todoList))
}