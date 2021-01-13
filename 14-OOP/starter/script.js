'use strict';

/*
//coding challenge 1
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function (speedInc) {
  this.speed += speedInc;
  console.log(this.make, this.speed);
};

Car.prototype.break = function (speedDec) {
  this.speed -= speedDec;
  console.log(this.make, this.speed);
};

const Gud = new Car(30, 'Aventador');
const Bad = new Car(30, 'Pathfinder');

Gud.accelerate(20);
Bad.break(20);
*/

//coding challenge 2
class CarCl {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(usSpeed) {
    this.speed = usSpeed * 1.6;
  }

  accelerate(speedInc) {
    this.speed += speedInc;
    console.log(this.make, this.speed);
  }

  break(speedDec) {
    this.speed -= speedDec;
    console.log(this.make, this.speed);
  }
}

const cab = new CarCl(40, 'Taxi');

cab.speedUS = 50;
console.log(cab.speedUS);

//coding challenge 4

class EV extends CarCl {
  constructor(speed, make, charge) {
    super(speed, make);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  accelerate(speedInc) {
    const chargeDown = speedInc / 20;
    if (this.charge - chargeDown >= 0 || ) {
      this.speed += speedInc;
      this.charge -= chargeDown;
      console.log(
        `${this.make} is going ${this.speed} km/h with a charge of ${this.charge}%`
      );
    } else {
      console.log("Your car doesn't have enough charge to go that fast");
    }
  }
}

const tesla = new EV(120, 'Tesla', 50);
tesla.accelerate(20);
tesla.accelerate(600);
tesla.accelerate(600);
