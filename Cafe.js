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
    console.log("--------------------------------------");
  }
}

export default Cafe;
