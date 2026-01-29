class Drink {
  #temperature;

  constructor(name, size, price) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр абстрактного класса");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = null;
  }

  getInfo() {
    return `Напиток: ${this.name}, размер: ${this.size}, цена: ${this.price}₽`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temp) {
    this.#temperature = temp;
  (`Температура напитка "${this.name}" установлена: ${temp}°C`);
  }

  prepare() {
    (`Готовим напиток "${this.name}"`);
    this.setTemperature(this.defaultTemperature());
  }

  serve() {
    this.prepare();
    (`Напиток "${this.name}" подан клиенту`);
  }

  defaultTemperature() {
    throw new Error("Метод defaultTemperature должен быть реализован в наследнике");
  }
}

export default Drink;
