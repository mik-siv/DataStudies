/*
The Observer pattern defines a one-to-many dependency between objects, 
so that when one object changes state, all its dependents are notified and updated automatically.
*/

const EventEmitter = require('events');

class Broadcaster extends EventEmitter {
    notify(topic: string) {
        this.emit(topic);
    }
}

class Observer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    update(topic: string) {
        console.log(`${this.name} received an update on topic: ${topic}`);
    }
}

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

const subject = new Broadcaster();

subject.on('topic1', () => observer1.update('topic1'));
subject.on('topic2', () => observer2.update('topic2'));

subject.notify('topic1');
subject.notify('topic2');
