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

