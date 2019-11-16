class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0')
    }
}
class Engine8 {
    complecatedInterface() {
        console.log('Engine 8.0')
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }
    simpleInterface() {
        this.engine.complecatedInterface();
    }
}
class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new Engine8());

myCar2.startEngine(engineAdapter);
