class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }
    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}

// produce base auto
const prototypeCar = new TeslaCar('S', 8000, 'black', false);

// cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

console.log(car1, car2, car3);

// change for particular auto
car1.interior = 'white';
car1.autopilot = true;

console.log(car1, car2, car3);
