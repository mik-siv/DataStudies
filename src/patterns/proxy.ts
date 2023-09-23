/*
The Proxy pattern provides a surrogate or placeholder for another object, 
controlling access to it and allowing additional functionality to be provided.
*/

interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log('Real subject request');
    }
}

class SubjectProxy implements Subject {
    private realSubject: RealSubject;

    public constructor() {
        this.realSubject = new RealSubject();
    }

    public request(): void {
        // Additional functionality before delegating to the real subject.
        this.realSubject.request();
        // Additional functionality after delegating to the real subject.
    }
}

const proxy = new SubjectProxy();
proxy.request();
