/*
Factory pattern provides a way to delegate the instantiation logic to child classes.
*/

interface ProductInterface {
    operation(): void;
}

class ExactProductA implements ProductInterface {
    public operation(): void {
        console.log('Product A operation');
    }
}

class ExactProductB implements ProductInterface {
    public operation(): void {
        console.log('Product B operation');
    }
}

interface Factory {
    createProduct(): ProductInterface;
}

class ConcreteFactoryA implements Factory {
    public createProduct(): ProductInterface {
        return new ExactProductA();
    }
}

class ConcreteFactoryB implements Factory {
    public createProduct(): ProductInterface {
        return new ExactProductB();
    }
}

const factoryA = new ConcreteFactoryA();
const productA = factoryA.createProduct();
productA.operation();

const factoryB = new ConcreteFactoryB();
const productB = factoryB.createProduct();
productB.operation();
