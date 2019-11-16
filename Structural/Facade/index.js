class Conveyor {
    setBody() { console.log('setBody') }
    getBody() { console.log('getBody') }
    getEngine() { console.log('getEngine') }
    setEngine() { console.log('setEngine') }
    setInterior() { console.log('setInterior') }
    getInterior() { console.log('getInterior') }
    // ...
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }
    assembleCar() {
        this.car.setBody();
        this.car.getBody();
        this.car.setEngine();
        this.car.getEngine();
        this.car.setInterior();
        this.car.getInterior();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());
conveyor.assembleCar();
