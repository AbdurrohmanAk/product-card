import Drink from "./Drink.js";

class Morse extends Drink {
  constructor(size, price, flavor) {
    super("Морс", size, price);
    this.flavor = flavor;
  }

  defaultTemperature() {
    return 10;
  }
}

export default Morse;
