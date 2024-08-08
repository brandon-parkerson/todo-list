import './style.css';
import businessLogo from './images/business-logo.jpg';
import { makeCard } from './card';

const sideBar = document.querySelector(".side-bar");

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    img.src = businessLogo;

    makeCard();
    newProjectListener();
    
  });



function newProjectListener() {
  const button = document.querySelector(".new");
  button.addEventListener("click", newDialog);
};

function newDialog() {
  const content = document.querySelector(".content");
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

  const newCard = makeCard(title, description, date, priority);

  addCardToPage(newCard);

  event.preventDefault();
  form.reset();
  
  dialog.close();
};

function cancelForm(event) {
  const dialog = document.querySelector("dialog");
  const form = document.querySelector("form");
  event.preventDefault();
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


