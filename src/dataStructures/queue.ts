//@ts-ignore
class ListNode {
  value: any;
  next: ListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: ListNode | null;
  last: ListNode | null;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value: any) {
    const newNode: ListNode = new ListNode(value);
    if (!this.last && !this.first) {
      this.first = newNode;
      this.last = this.first;
    } else if (this.last) {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.last;
  }
  dequeue() {
    if (this.first) {
      let first = this.first;
      if (this.first.next) {
        this.first = this.first.next;
      } else {
        this.first = null;
        this.last = null;
      }
      this.length--;
      return first;
    }
    console.log("Queue is already empty, can't dequeue");
    return null;
  }
  isEmpty() {
    return !this.first;
  }
}

const myQueue = new Queue();
myQueue.enqueue("first");
myQueue.enqueue("second");
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
