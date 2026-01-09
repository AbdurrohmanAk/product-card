import { Vehicle } from "./InfoCar";
export class Car extends Vehicle {
  constructor(brand, maxSpeed, fuelType) {
    super(brand, maxSpeed);
    this.fuelType = fuelType;
  }
}