interface listItem {
  value: any;
  next: {} | null;
}

class LinkedList {
  head: listItem;
  tail: listItem;
  length: number;
  constructor(value: any) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value: any) {
    const newNode: listItem = { value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.head;
  }
  prepend(value: any) {
    let list = this.head;
    this.head = { value, next: list };
    this.length++;
    return this.head;
  }
}

const newList = new LinkedList(10);

newList.prepend(1);
console.log(newList.append(5));
// newList.append(16);
