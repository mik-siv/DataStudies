/*
The Prototype pattern allows objects to be created by cloning existing objects, 
providing a way to create new instances while keeping the system decoupled from their concrete classes.
*/

interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    public clone(): Prototype {
        return new ConcretePrototype();
    }
}

const prototype = new ConcretePrototype();
const clonedObject = prototype.clone();