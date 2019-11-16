class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {
    create(type) {
        if(type === 'X6') {
            return new Bmw('X6', 1000, 200);
        }
        if(type === 'X5') {
            return new Bmw('X5', 500, 100);
        }
    }
}

const factory = new BmwFactory();

const x6 = factory.create('X6');
const x5 = factory.create('X5');
console.log(x6, x5);
