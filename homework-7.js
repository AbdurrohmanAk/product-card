// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получили массив чисел начиная с 5

const numbers = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = numbers.filter(number => number >= 5);
console.log(filteredNumbers);

// 3. Создать массив строк относящихся к любой сущности. Проверить есть ли в массиве  какая-то определенная сущность.

const arraySubjects = ["Зеленная миля", "Побег из Шоушенка", "Форрест Гамп", "Интерстеллар"];
const hasEntity = arraySubjects.includes("Форрест Гамп");
console.log(hasEntity);

// 4. Написать функцию которая аргументом будет принимать массив и изменять его порядок на противоположный 

function reverseArray(arr) { 
    return arr.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(arraySubjects));

// 5. Добавить файл commets.js в нем создать конст ...

// 6. Сделать константу экспортируемой  добавим перед конст ключевое слово export....//

// .7 Вывести в консоль массив тех комментариев почта пользоватлей которых содержит "com"

import { userComments } from "./comments.js";
const filteredComments = userComments.filter(comment => comment.email.includes(".com"));
console.log(filteredComments);

// .8 Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те у кого больше 5 имели postId: 1

userComments.forEach(comment => {
    if (comment.id <= 5) {
        comment.postId = 2;
    } else {
        comment.postId = 1;
    }
});
console.log(userComments);


// 9. Перебрать массив чтобы объекты сотсояли только из айди и имени 

const idNameArray = userComments.map(comment => {
    return { id: comment.id, name: comment.name }; 
});
console.log(idNameArray);

// 10. Перебираем массив добавляем объектам свойство inInvalid и проверяем: если длина тела сообщения(body) ,больше 180 символов устанавливаем true если не false

userComments.forEach(comment => {
    comment.inInvalid = comment.body.length > 180;
});
console.log(userComments);

// 11. Почитать про метод массива reduce. Используя его вывести массив почт и провернуть тоже самое с методом map

const postOffice = userComments.reduce((acc, comment) => {acc.push(comment.email) ; return acc;}, []);
console.log(postOffice);

const mailWithdrawal = userComments.map(comment => comment.email);
console.log(mailWithdrawal);

// 12. Почитать про методы toString() join() и перебрав массив с задания 11 привести его к строке 

const separatingArray = mailWithdrawal.join(", ");

console.log(separatingArray);

const separateArray = postOffice.toString();

console.log(separateArray);