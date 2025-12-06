import { listProduct } from "./list-product.js";

// 3. Создать и реализовать шаблон продуктовых карточек 

const productTempalte = document.getElementById('product-template');
const cardList = document.getElementById('card-list');

listProduct.forEach(product => {
  const productClone = productTempalte.content.cloneNode(true)
  productClone.querySelector('.card-image').src = `img/${product.image}.png`;
  productClone.querySelector('.product-description').textContent = product.description ;
  productClone.querySelector('.product-name').textContent = product.name;
  productClone.querySelector('.text-product').textContent = product.text;

  const compositionItems = productClone.querySelectorAll('.composition-item');
  compositionItems.forEach((item, index) => {
    item.textContent = product.composition[index]
  });

  productClone.querySelector('.price-value').textContent = product.price + " Р";
  cardList.appendChild(productClone);
});

// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const listProductString = listProduct.reduce((acc, item, index) => {
  return acc + (index === 0 ? item.name: ";" + item.name);
}, "");
console.log(listProductString)

// 5.  Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productsByName = listProduct.reduce((acc, item) => {
  acc[item.name] = item.description;
  return acc;
},[])


// 6. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5"

const showCards = () => {
  const displayCard = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(displayCard);
if (displayCard === null) {
  createCards(5);
} else if (number >=1 && number <= 5) {
  createCards(numbers);
} else {
  alert("Показать все карточки.");
  createCards(5);
}
}
showCards()