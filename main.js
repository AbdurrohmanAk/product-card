// Покраска первой карточки продукта //
const firstProductCard = document.querySelector(".card-container");
const changeColorCardButton = document.querySelector("#button_change_card");
const yellowColor = "#e2dc84ff";
const silverColor = "#5d6c6aff";
const blueColor = "#4a90e2";
const redColor = "#ff4c4c";

changeColorCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = yellowColor;
});

// Покраска всех карточек продукта //

const ProductCards = document.querySelectorAll(".card-container");
const buttonChangeColorCards = document.querySelector("#button_change_cards");

buttonChangeColorCards.addEventListener("click", () => {
  ProductCards.forEach((card) => (card.style.backgroundColor = silverColor));
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
colorsButton.style.backgroundColor = blueColor;
let isColored = false;
colorsButton.addEventListener("click", () => {
  if (isColored) {
    colorsButton.style.backgroundColor = blueColor;
  } else {
    colorsButton.style.backgroundColor = redColor;
  }
  isColored = !isColored;
});
