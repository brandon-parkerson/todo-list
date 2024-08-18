import './style.css';
import businessLogo from './images/business-logo.jpg';
import { makeCard } from './card';



document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    img.src = businessLogo;

    retrieveCards()
    
    newProjectListener();
    toDoListener();
    
    
  });

let todos = [];


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
  event.preventDefault();

  const title = form.querySelector("#title").value;
  const description = form.querySelector("#description").value;
  const date = form.querySelector("#date").value;
  const priority = form.querySelector("#priority").checked;
  const list = document.querySelector("#todoListContainer");
  

  const newCard = makeCard(title, description, date, priority, todos);

  addCardToPage(newCard);

  
  form.reset();
  list.innerText = ``;
  todos = [];
  
  dialog.close();
};

function cancelForm(event) {
  const dialog = document.querySelector("dialog");
  const form = document.querySelector("form");
  const list = document.querySelector("#todoListContainer");

  
  event.preventDefault();
  list.innerText = ``;
  form.reset();
  todos = [];

  dialog.close();
};

function addCardToPage(card) {
  const content = document.querySelector(".content");

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  // Safely handle the todos array
  const todosHTML = Array.isArray(card.todos)
    ? card.todos.map(todo => `<li><input type="checkbox" class="list-checkbox">${todo}</li>`).join('')
    : '';

  cardElement.innerHTML = `
    <h3>${card.title}</h3>
    <p>${card.description}</p>
    <p>Due Date: ${card.date}</p>
    <p>Priority: ${card.priority ? "High" : "Normal"}</p>
    <div class="todos-container">
        <h4>TO-DO List:</h4>
        <ul class="mapped-list">
        ${todosHTML}
        </ul>
    </div>
    <button class="delete">Delete</button>
  `;

  cardElement.querySelector(".delete").addEventListener("click", function() {
    removeCardFromPage(card.id, cardElement);
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

    if (todoItem) {
        todos.push(todoItem);
    };

    container.innerHTML += `<ul class="todo-list-dialog">
        <li>${todoItem}</li>
    </ul>`;

    document.getElementById("todo").value = "";
    
};

// Checks for local storage availability

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function retrieveCards() {
  const retrievedCards = JSON.parse(localStorage.getItem('cards')) || [];

  // This loops through the array that was retrieved and calls on the function that adds the card to the page

  retrievedCards.forEach(card => {
    addCardToPage(card);
  });
};

function removeCardFromPage(id, cardElement) {
  const content = document.querySelector(".content");
  content.removeChild(cardElement);

  // Remove the card from localStorage
  let storedCards = JSON.parse(localStorage.getItem('cards')) || [];
  storedCards = storedCards.filter(card => card.id !== id);
  localStorage.setItem('cards', JSON.stringify(storedCards));
};
