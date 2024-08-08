import './style.css';
import businessLogo from './images/business-logo.jpg';

const sideBar = document.querySelector(".side-bar");

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    img.src = businessLogo;

    makeCard();
    newProjectListener();
    
  });


function makeCard() {
  const card = document.querySelector("#card1");
  card.innerText = `Project One: content jfjddjffjd
  jflsdjfffsfsdfsdf
  fjsdfsdffd`;
  
};

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


