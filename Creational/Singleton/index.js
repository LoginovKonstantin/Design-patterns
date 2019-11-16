const instance1 = {
    name: 'Foo'
};
const instance2 = {
    name: 'Foo'
};
// объекты никогда не будут равны, не очень красивый пример, но это синглтон
console.log(instance1 === instance2);
// также
console.log({} === {});

// хороший пример
class Counter {
    constructor() {
        if(typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }
    incCount() {
        this.count ++;
        return this;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();
counter1.incCount().incCount();
counter2.incCount().incCount();
console.log(counter1);
console.log(counter2);
// равны так как это один и тот же объект
console.log(counter2 === counter1);
