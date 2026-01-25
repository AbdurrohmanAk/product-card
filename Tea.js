import Drink from "./Drink.js";

class Tea extends Drink {
  constructor(size, price, teaType) {
    super("Чай", size, price);
    this.teaType = teaType;
  }

  defaultTemperature() {
    return 80;
  }
}

export default Tea;
