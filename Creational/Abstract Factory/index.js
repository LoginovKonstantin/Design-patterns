// abstract factory
function BmwProducer(kind) {
    return kind === 'sport' ? SportCarFactory : FamilyCarFactory;
}

// factories
function SportCarFactory() {
    return new Z4();
}
function FamilyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return 'Z4 is sport car';
    }
}
class I3 {
    info() {
        return 'I3 is family car';
    }
}

const produceSportFactory = new BmwProducer('sport');
const produceFamilyFactory = new BmwProducer('');
console.log(produceSportFactory().info());
console.log(produceFamilyFactory().info());
