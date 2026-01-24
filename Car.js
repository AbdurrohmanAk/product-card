import { Vehicle } from "./Vehicle";
export class Car extends Vehicle {
  constructor(brand, maxSpeed, fuelType) {
    super(brand, maxSpeed);
    this.fuelType = fuelType;
  }

}
