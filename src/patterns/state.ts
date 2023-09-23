/*
State is a behavioral design pattern that lets an object alter its behavior when its internal state changes.
It appears as if the object changed its class.
*/

interface State {
    handle(): void;
}

class ConcreteStateA implements State {
    public handle(): void {
        console.log('Handling state A');
    }
}

class ConcreteStateB implements State {
    public handle(): void {
        console.log('Handling state B');
    }
}

class Context {
    private state: State;

    public constructor() {
        this.state = new ConcreteStateA();
    }

    public setState(state: State): void {
        this.state = state;
    }

    public request(): void {
        this.state.handle();
    }
}

const context = new Context();
context.request();

const newState = new ConcreteStateB();
context.setState(newState);
context.request();
