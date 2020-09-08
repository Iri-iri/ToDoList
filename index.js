let addMessage = document.querySelector(".message");
let addMessageDescription = document.querySelector(".message_description");
const addButton = document.querySelector(".add");
let todo = document.querySelector(".todo");
const editButton = document.querySelector(".editButton")

let data = {
  todo: [],
  inprogress: [],
  done: [],
  deleted: []
};

addButton.addEventListener("click", function () {

  data.todo.push({
    title: addMessage.value,
    description: addMessageDescription.value
  });
  displayMessages();
});

function displayMessages() {
  let displayMessage = "";
  data.todo.forEach(function (item) {
    displayMessage += `
    <li>
    ${item.title + ": " + item.description}
    <button class="button_image editButton"></button>
    <button class="button_image progressButton"></button>
    <button class="button_image deleteButton"></button>
    </li> 
    `;
    todo.innerHTML = displayMessage;
  });
}