/*
The Facade pattern provides a simplified interface 
to a complex subsystem, making it easier to use and understand.
*/


class SubsystemA {
    public operationA(): void {
        console.log('Subsystem A operation');
    }
}

class SubsystemB {
    public operationB(): void {
        console.log('Subsystem B operation');
    }
}

class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;

    public constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }

    public operation(): void {
        this.subsystemA.operationA();
        this.subsystemB.operationB();
    }
}

const facade = new Facade();
facade.operation();