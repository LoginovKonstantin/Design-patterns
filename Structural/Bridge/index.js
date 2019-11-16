class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color {
    constructor(type) {
        this.type = type;
    }
    get() {
        return this.type;
    }
}
class BlackColor extends Color{
    constructor() {
        super('Black color')
    }
}
class RedColor extends Color{
    constructor() {
        super('Red color')
    }
}

class Audi extends Model {
    constructor(color) {
        super(color)
    }
    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`
    }
}
class Bmw extends Model {
    constructor(color) {
        super(color)
    }
    paint() {
        return `Auto: Bmw, Color: ${this.color.get()}`
    }
}


const blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint());

const redAudi = new Audi(new RedColor());
console.log(redAudi.paint());
