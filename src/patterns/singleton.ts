/*
The Singleton pattern ensures that a class has only one instance 
and provides a global point of access to that instance.
*/

class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Private constructor to prevent instantiation.
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public doSomething(): void {
        // Implementation of singleton functionality.
    }
}

const singletonInstance = Singleton.getInstance();
singletonInstance.doSomething();