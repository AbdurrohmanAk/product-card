import Drink from "./Drink.js";

class Coffee extends Drink {
  constructor(size, price, beanType, milkType) {
    super("Кофе", size, price);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  defaultTemperature() {
    return 90;
  }
}

export default Coffee;
