import Drink from "./Drink.js";

class Lemonade extends Drink {
  constructor(size, price, flavor) {
    super("Лимонад", size, price);
    this.flavor = flavor;
  }

  defaultTemperature() {
    return 5;
  }
}

export default Lemonade;
