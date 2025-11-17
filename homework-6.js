// 3.Создать объект основе ваших данных 

const profile = {
  name: "Adburrohman",
  surname: "Kurbanov",
  age: 27,
  country: "Russia",
  city: "Derbent",
  job: "Сrane operator",
  hobby: "Fishing",
  mail: "kkurbanov@gmail.com"
}
console.log(profile);

// .4 Создать объект который будет хранить данные об автомобиле и добавить дополниетльное свойство...

const car = {
  brand: "Toyota",
  model: "Land cruiser",
  year: 2020,
  color: "Black",
  mileage: 15000,
}
car.owner = profile;
console.log(car);

// 5. Написать функцию которая аргументом будет принимать объект описанный в пунке 4...

function setMaxSpeed(carObj, topSpeed) {
  if (!carObj.hasOwnProperty('topSpeed')) {
  carObj.topSpeed = topSpeed;
  console.log(`Максимальная скорость автомобиля ${carObj.brand} ${carObj.model} установлена на ${topSpeed} км/ч.`);
  } else {
  console.log(`Максимальная скорость автомобиля ${carObj.brand} ${carObj.model} уже установлена на ${carObj.topSpeed} км/ч.`);
  }
};
setMaxSpeed(car, 180);
setMaxSpeed(car, 200);
console.log(car);

// 6. Написать функцию которая получает первым аргументом объект, а вторым аргументом свойство объекта...

function printCarInfo(carObj, property) {
  console.log(carObj[property]);
}
printCarInfo(car, "brand");

// 7. Массив продуктов

const products = ["milk", "bread", "cheese", "butter", "tea", "sugar", "coffee", "candies", "sausage", "sour cream"];

// 8.Массив из книг

const library = [
  {
    bookTitle: "Война и мир",
    author: "Лев Толстой",
    year: 1867,
    coverColor: "Красный",
    genre:  "Историческая Фантастика",
  },
  {
    bookTitle: "Метель",
    author: "Александр Пушкин",
    year: 1830,
    coverColor: "Синий",
    genre:  "Романтическая Литература",
  },
  {
    bookTitle: "Идиот",
    author: "Федор Достоевский",
    year: 1869,
    coverColor: "Зеленый",
    genre:  "Роман",  
  }
];

 library.push({
  bookTitle: "Пищи сокращай",
  author: "Максим Ильяхов Людмила Сарычева",
  year: 2022,
  coverColor: "Оранжевый",
  genre: "Саморазвитие"
 })
 
 console.log(library);

 // 9. Создать еще массив книг и объединить с другим массивом 

 const fictionBooks = [
  {
  bookTitle: "Дюна",
  author: "Фрэнк Герберт",
  year: 1965,
  coverColor: "Желтый",
  genre: "Научная фантастика"
 },

 {
  bookTitle: "Нейромант",
  author: "Уильям Гибсон",
  year: 1984,
  coverColor: "Серый",
  genre: "Киберпанк"
 },
 {
  bookTitle: "Марсианин",
  author: "Энди Вейер",
  year: 2011,
  coverColor: "Красный",
  genre: "Научная фантастика"
 }
]
const books = [...library, ...fictionBooks];
console.log(books);

// 10. Создать функцию которая принимает массив сущностей 

function addProperty(booksarray) {
  return booksarray.map(book => ({ 
    ...book,
    isRare: book.year < 2000
  }));
}

const newBooks = addProperty(books);
console.log(newBooks);