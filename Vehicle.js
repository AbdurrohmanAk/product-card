export class Vehicle {
  constructor(brand, maxSpeed) {

    this.brand = brand;
    this.maxSpeed = maxSpeed;
  }
  move() {
  (`${this}едет со скоростью ${maxSpeed} км/ч`);
  }
}
