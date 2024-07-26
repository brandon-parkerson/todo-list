import './style.css';
import businessLogo from './images/business-logo.jpg';

const sideBar = document.querySelector(".side-bar");

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    img.src = businessLogo;

    makeCard();
    
  });


function makeCard() {
  const card = document.querySelector("#card1");
  card.innerText = `Project One: content jfjddjffjd
  jflsdjfffsfsdfsdf
  fjsdfsdffd`;
  
}