// Покраска первой карточки продукта //
const firstProductCard = document.querySelector(".card-container");
const changeColorCardButton = document.querySelector("#button_change_card");
changeColorCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = "#e2dc84ff";
});

// Покраска всех карточек продукта //

const productCards = document.querySelectorAll(".card-container");
const buttonChangeColorCards = document.querySelector("#button_change_cards");
buttonChangeColorCards.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = "#5d6c6aff"));
});

// Открыть Google //

const openGoogleButton = document.querySelector("#button_open_google");
openGoogleButton.addEventListener("click", openGoogle);
function openGoogle() {
  const answer = confirm("Вы хотите открыть Google?");
  if (answer === true) {
    window.open("https://www.google.com");
  } else {
    return;
  }
}

// Вывод в консоль заголовок страницы//

const titlePage = document.querySelector("h1");
titlePage.addEventListener("mouseenter", () => {
  console.log("Навели на заголовок");
});

// Изменение цвета кнопки //

const colorsButton = document.getElementById("colors-button");
colorsButton.addEventListener("click", () => {
  colorsButton.classList.toggle("change_color");
});

import "./comments.js";
import "./product-list.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import { Modal } from "./modal.js";
import { Form } from "./Form.js";

const modal = new Modal("overlayModal");
const registerForm = new Form("registerForm");
document.getElementById("openModal").addEventListener("click", () => {
modal.open();
});
registerForm.form.addEventListener("submit", (event) => {
event.preventDefault();
  if (registerForm.isValid()) {
    console.log(registerForm.getValues());
    registerForm.reset();
    modal.close();
  } else {
    alert("Заполните форму корректно");
  }
});

import Cafe from "./Cafe.js";
import Coffee from "./Coffee.js";
import Tea from "./Tea.js";
import Lemonade from "./Lemonade.js";
import Morse from "./Morse.js";

const cafe = new Cafe("andCoffee", "ул. Гагарина, 12");
console.log(cafe.getInfo());
console.log("---------------------------------------");

const coffee = new Coffee("Большой", 250, "Arabica", "Коровье");
const tea = new Tea("Маленький", 150, "Чёрный");
const lemonade = new Lemonade("Средний", 100, "Груша");
const morse = new Morse("Большой", 200, "Смородина");

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(morse);