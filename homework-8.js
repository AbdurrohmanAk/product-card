import { productList } from "./product-list.js";

// 3. Создать и реализовать шаблон продуктовых карточек

const productTemplate = document.getElementById("product-template");
const cardList = document.getElementById("card-list");

function createCards(products) {
  cardList.innerHTML = "";
  products.forEach((product) => {
    const clone = productTemplate.content.cloneNode(true);

    clone.querySelector(".card-image").src = `img/${product.image}.png`;
    clone.querySelector(".product-description").textContent =product.description;
    clone.querySelector(".product-name").textContent = product.name;
    clone.querySelector(".text-product").textContent = product.text;

    const list = clone.querySelector(".list-option-product");
    product.composition.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    clone.querySelector(".price-value").textContent = product.price + " ₽";
    cardList.appendChild(clone);
  });
}

// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productListString = productList.reduce(
  (acc, item) => (acc === "" ? item.name : acc + ";" + item.name),
  ""
);

// 5.  Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productsByName = productList.reduce((acc, item) => {
  acc[item.name] = item.description;
  return acc;
}, {});

// 6. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5"

function showCards() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");
  const number = Number(count)
  let showToCards;

  if (number >= 1 && number <= 5) {
    showToCards = number;
  } else {
    alert ("Некорректное значение, показываем 5 карточек.");
    showToCards = 5
  }
  createCards(productList.slice(0, showToCards));
}
showCards()
