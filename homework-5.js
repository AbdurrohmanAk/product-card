// 3. Вывод прогноза погоды в консоль

function showWeather (city, temperature) {
  (`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`)
  }
  showWeather('Махачкала', 13)

  // 4. Сравнение скорости

  const SPEED_OF_SOUND = 343; 
  function compareSpeed(speed) {
    if (speed > SPEED_OF_SOUND) {
      ("Сверхзвуковая скорость")
    } else {
      ("Дозвуковая скорость")
      }
    }
    compareSpeed(350);

// 5. Определение бюджета для покупки 

  const productCoffee = "ColdBrew";
  const productPrice = 250;
  const buyCoffee = (budget) => {
    if (budget >= productPrice) {
      (`приобретен ${productCoffee} Спасибо за покупку!`);
    } else {
    (`Вам не хватает ${productPrice - budget} средств пополните баланс`);
    }
  }
  buyCoffee(200);
  buyCoffee(250);

  // 6. Создать и именовать функцию

function showInfo() {
}
showInfo();

// 7. Создать и именовать переменные 

const name = "Abdurrohman";
const locationCity = "Dagestan, Derbent"; 
const telegram = "abdu_drnt";