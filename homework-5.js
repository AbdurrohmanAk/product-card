// 3. Вывод прогноз погоды в консоль

function weatherForecast(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature}°C`);
}
weatherForecast("Дербент", +12);

// 4.Сравнение скорости

const soundSpeed = 343;

function compareSpeed(speed) {
  if (speed >= soundSpeed) {
    console.log("Cверхзвуковая скорость");
  } else {
    console.log("Дозвуковая скорость");
  }
}
compareSpeed();

// 5. Определение бюджета для покупки

const productCoffee = "ColdBrew";
const productPrice = 250;
const buyCoffee = (budget) => {

  if (budget >= productPrice) {
    console.log(`приобретен ${productCoffee}`);
  } else {
    console.log(`Вам не хватает ${productPrice - budget} средств пополните баланс`);
  }
}
buyCoffee(200);

// 6. Создать и именовать функцию 

function showInfo() {
  console.log("It-simulator");
}
showInfo();

// 7. Создать и именовать переменные 

const name = "Abdurrohman";
const locationCity = "Dagestan, Derbent"; 
const telegram = "@abdu_drnt";
