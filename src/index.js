import './style.css';
import businessLogo from './images/business-logo.jpg';
import { makeCard } from './card';



document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    img.src = businessLogo;

    makeCard();
    newProjectListener();
    toDoListener();
  });



function newProjectListener() {
  const button = document.querySelector(".new");
  button.addEventListener("click", newDialog);
};

function newDialog() {
  const dialog = document.querySelector("dialog");
  const submit = document.querySelector("#submit");
  const cancel = document.querySelector("#cancel");
  
  dialog.showModal();
  submit.addEventListener("click", dialogSubmitted);
  cancel.addEventListener("click", cancelForm)

};

function dialogSubmitted(event) {
  const dialog = document.querySelector("dialog");
  const form = document.querySelector("form");
  

  const title = form.querySelector("#title").value;
  const description = form.querySelector("#description").value;
  const date = form.querySelector("#date").value;
  const priority = form.querySelector("#priority").checked;
  const list = document.querySelector("#todoListContainer");
  const newCard = makeCard(title, description, date, priority);

  addCardToPage(newCard);

  event.preventDefault();
  form.reset();
  list.innerText = ``;
  
  dialog.close();
};

function cancelForm(event) {
  const dialog = document.querySelector("dialog");
  const form = document.querySelector("form");
  const list = document.querySelector("#todoListContainer");

  
  event.preventDefault();
  list.innerText = ``;
  form.reset();

  dialog.close();
};

function addCardToPage(card) {
  const content = document.querySelector(".content");

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
    cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <p>Due Date: ${card.date}</p>
        <p>Priority: ${card.priority ? "High" : "Normal"}</p>
        <button class="delete">Delete</button>
    `;
    cardElement.querySelector(".delete").addEventListener("click", function() {
      content.removeChild(cardElement);
  });

  content.appendChild(cardElement);
};

function toDoListener() {
    const button = document.querySelector("#addTodo");

    button.addEventListener("click", handleToDoButton);
}

function handleToDoButton() {
    let todoItem = document.querySelector("#todo").value;
    const container = document.querySelector("#todoListContainer");

    container.innerHTML += `<ul class="todo-list-dialog">
        <li>${todoItem}</li>
    </ul>`;

    document.getElementById("todo").value = "";
    
};