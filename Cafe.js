class Drink {
  constructor(name, size, price) {
    if (new.target === Drink) {
      throw new Error("Нельзая создать экземпляр абстрактного класса");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = null;
  }
  #temperature;

  getInfo() {
    return this.#temperature;
  }

  setTemperature(temp) {
    this.#temperature = temp;
    console.log(`Температура напитка  "${this.name}" установлена: ${temp} C`);
  }

  #prepare() {
    console.log(`Готовим напиток "${this.name}"`);
    this.setTemperature(this.defaultTemperature())
  }

  serve() {
    this.#prepare();
    console.log(`Напиток "${this.name}" подан клиенту`);
  }

  defaultTemperature() {
    throw new Error("Метод default должен быть реализован в наследнике");
  }

}

class Coffe extends Drink {
  constructor(size, price, beatType, milkType) {
    super("Кофе", size, price);

    this.beatType = beatType;
    this.milkType = milkType;
  }

  defaultTemperature() {
    return 90;
  }
}

class Tea extends Drink {
  constructor(size, price, teaType) {
    super("Чай", size, price);

    this.teaType = teaType;
  }

  defaultTemperature() {
    return 80;
  }
}

class Lemonade extends Drink {
  constructor(size, price, flavor) {
    super("Лимонад", size, price);

    this.flavor = flavor;
  }

  defaultTemperature() {
    return 5; 
  }
} 

class Morse extends Drink {
  constructor(size, price, flavor) {
    super("Лимонад", size, price);

    this.flavor = flavor;
  }

  defaultTemperature() {
    return 10;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе "${this.name}", адрес: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Заказ принят в кафе "${this.name}"`);
    console.log(drink.getInfo());

    drink.serve();
  }
}

const cafe = new Cafe("andCoffee", "ул. Гагарина, 12");
console.log(cafe.getInfo());

const coffee = new Coffee("Большой", 250, "Mikale", "Коровье");
const tea = new Tea("Маленький", 150, "Черный");
const lemonade = new Lemonade("Средний", 100, "Груша");
const morse = new Morse("Большой", 200, "Смородина");

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(morse);
