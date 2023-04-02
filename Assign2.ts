abstract class Vehicle {
  constructor(
    private make: string,
    private model: string,
    private year: number,
    private rented: boolean = false
  ) {}

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  getRented(): boolean {
    return this.rented;
  }

  setRented(rented: boolean): void {
    this.rented = rented;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.rented) {
      console.log("This vehicle is already rented.");
    } else {
      this.rented = true;
      console.log("Vehicle rented.");
    }
  }

  returnVehicle(): void {
    if (!this.rented) {
      console.log("This vehicle is not rented.");
    } else {
      this.rented = false;
      console.log("Vehicle returned.");
    }
  }
}

// Subclass Car:

class Car extends Vehicle {
    constructor(
      make: string,
      model: string,
      year: number,
      rented: boolean = false,
      private numDoors: number = 4
    ) {
      super(make, model, year, rented);
    }
  
    getNumDoors(): number {
      return this.numDoors;
    }
  
    rentalRate(): number {
      return !this.getRented() ? 50 : 0;
    }
  }
  
//Subclass Truck:

class Truck extends Vehicle {
    constructor(
      make: string,
      model: string,
      year: number,
      rented: boolean = false,
      private payloadCapacity: number = 2000
    ) {
      super(make, model, year, rented);
    }
  
    getPayloadCapacity(): number {
      return this.payloadCapacity;
    }
  
    rentalRate(): number {
      return !this.getRented() ? 80 : 0;
    }
  }

  //Subclass Motorcycle:

  class Motorcycle extends Vehicle {
    constructor(
      make: string,
      model: string,
      year: number,
      rented: boolean = false,
      private numWheels: number = 2
    ) {
      super(make, model, year, rented);
    }
  
    getNumWheels(): number {
      return this.numWheels;
    }
  
    rentalRate(): number {
      return !this.getRented() ? 30 : 0;
    }
  }

  //Testing the code:
  // create instances of each type of vehicle
  
const car1 = new Car("Toyota", "Corolla", 2018);
const truck1 = new Truck("Ford", "F-150", 2020);
const motorcycle1 = new Motorcycle("Harley Davidson", "Sportswear", 2021);

// rent a vehicle
car1.rent();
truck1.rent();
motorcycle1.rent();

// try to rent a vehicle that is already rented
car1.rent();

// return a vehicle
truck1.returnVehicle();

// try to return a vehicle that is not rented
car1.returnVehicle();



