/*
The Iterator pattern provides a way to access the elements of an aggregate object sequentially 
without exposing its underlying representation.
*/

function range(start: number, end: number, step = 1) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next: function () {
            if (start < end) {
                start += step;
                return { value: start, done: false }
            }
            return { value: end, done: true }
        }
    }
}

for (const num of range(1, 10)) {
    console.log(num)
}


//Iterator class approach

interface ExampleIteratorResult<T> {
    done: boolean;
    value: T | null;
}

interface Iterator<T> {
    hasNext(): boolean;
    next(): IteratorResult<T>;
}

class ConcreteIterator<T> implements Iterator<T> {
    private collection: T[];
    private index: number;

    public constructor(collection: T[]) {
        this.collection = collection;
        this.index = 0;
    }

    public hasNext(): boolean {
        return this.index < this.collection.length;
    }

    public next(): IteratorResult<T> {
        if (this.hasNext()) {
            return { done: false, value: this.collection[this.index++] };
        }
        return { done: true, value: null };
    }
}


const collection = [1, 2, 3, 4, 5];
const iterator = new ConcreteIterator(collection);

while (iterator.hasNext()) {
    console.log(iterator.next());
}
