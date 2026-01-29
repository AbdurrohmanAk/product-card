class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе "${this.name}", адрес: ${this.location}`;
  }

  orderDrink(drink) {
  (`Заказ принят в кафе "${this.name}"`);
  (drink.getInfo());
    drink.serve();
  ("--------------------------------------");
  }
}

export default Cafe;
