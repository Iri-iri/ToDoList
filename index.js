let addMessage = document.querySelector(".message");
let addMessageDescription = document.querySelector(".message_description");
const addButton = document.querySelector(".add");
let todo = document.querySelector(".todo");
const editButton = document.querySelector(".editButton")

let todoList = [];

addButton.addEventListener("click", function () {

  let newTodo = {
    todo: addMessage.value + ": " + addMessageDescription.value
  };

  todoList.push(newTodo);
  displayMessages();
});

function displayMessages() {
  let displayMessage = "";
  todoList.forEach(function (item) {
    displayMessage += `
    <li>
    ${item.todo}
    <button class="button_image editButton"></button>
    <button class="button_image progressButton"></button>
    <button class="button_image deleteButton"></button>
    </li> 
    `;
    todo.innerHTML = displayMessage;
  });
}
