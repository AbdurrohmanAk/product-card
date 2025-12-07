// .7 Вывести в консоль массив тех комментариев почта пользоватлей которых содержит "com"

import { userComments } from "./comments.js";
const filteredComments = userComments.filter((comment) =>
  comment.email.includes(".com")
);

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получили массив чисел начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((number) => number >= 5);

// 3. Создать массив строк относящихся к любой сущности. Проверить есть ли в массиве  какая-то определенная сущность.

const listFilms = [
  "Зеленная миля",
  "Побег из Шоушенка",
  "Форрест Гамп",
  "Интерстеллар",
];

// 4. Написать функцию которая аргументом будет принимать массив и изменять его порядок на противоположный

function getReverseArray(arr) {
  return arr.reverse();
}

// 5. Добавить файл commets.js в нем создать конст ...

// 6. Сделать константу экспортируемой  добавим перед конст ключевое слово export....//

// .8 Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те у кого больше 5 имели postId: 1

const updateUser = userComments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

// 9. Перебрать массив чтобы объекты сотсояли только из айди и имени

const idNameArray = userComments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

// 10. Перебираем массив добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения(body) ,больше 180 символов устанавливаем true если не false

const checkUserComments = userComments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

// 11. Почитать про метод массива reduce. Используя его вывести массив почт и провернуть тоже самое с методом map

const userMail = userComments.map((comment) => ({ email: comment.email }));

const getNewMail = userComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

// 12. Почитать про методы toString() join() и перебрав массив с задания 11 привести его к строке

const separatingArray = userMail.join(", ");


const separateArray = getNewMail.toString();

