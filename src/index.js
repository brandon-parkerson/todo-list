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
  const dialog = document.createElement("dialog");
  const submit = document.createElement("button");

  submit.classList.add("dialog-submit");

  submit.innerText = "Submit";

  dialog.innerText = "this opened dialog";
  dialog.appendChild(submit);

  content.appendChild(dialog);

  dialog.showModal();

  submit.addEventListener("click", dialogSubmitted);

};

function dialogSubmitted() {
  const dialog = document.querySelector("dialog");

  dialog.close();
  dialog.remove();
};

