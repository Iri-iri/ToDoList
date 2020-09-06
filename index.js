let addMessage = document.querySelector(".message");
let addMessageDescription = document.querySelector(".message_description");
let addButton = document.querySelector(".add");
let todo = document.querySelector(".todo");
let editButton = document.querySelector(".editButton")

let todoList = [];

addButton.addEventListener("click", function () {

  let newTodo = {
    todo: addMessage.value + ": " + addMessageDescription.value,
    checked: false,
  };

  todoList.push(newTodo);
  displayMessages();
});

function displayMessages() {
  let displayMessage = "";
  todoList.forEach(function (item, i) {
    displayMessage += `
    <li>
    <input type="checkbox" id="item_${ i}" ${item.checked ? "checked" : ""}>
    <label label for = "item_${ i}">${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
}

todo.addEventListener("change", function (event) {
  let idInput = event.target.getAttribute("id");
});

todo.addEventListener("change", function (event) {
  let idInput = event.target.getAttribute("id");
  let forLabel = todo.querySelector('[for=' + idInput + ']');
  let valueLabel = forLabel.innerHTML;

  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
    }
  });
});
