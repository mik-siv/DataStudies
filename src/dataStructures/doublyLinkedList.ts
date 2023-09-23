class ListNode1 {
  value: any;
  next: ListNode1 | null;
  previous: ListNode1 | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList1 {
  head: ListNode1 | null;
  tail: ListNode1 | null;
  length: number;
  constructor(value: any) {
    this.head = new ListNode1(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any) {
    const newNode = new ListNode1(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this.head;
  }

  prepend(value: any) {
    const newHead = new ListNode1(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this.head;
  }

  printList() {
    let currentNode: ListNode1 | null = this.head;
    const array = [];
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: any) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index < 1) {
      return this.prepend(value);
    }
    const newNode = new ListNode1(value);
    const leader = this.traverseToIndex(index - 1);
    if (leader && leader.next) {
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.previous = leader;
      newNode.next = holdingPointer;
      this.length++;
    }
  }

  traverseFromHead(index: number): ListNode1 | null {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let currentNode: ListNode1 | null = this.head;
    while (currentNode && counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  traverseFromTail(index: number): ListNode1 | null {
    let counter = this.length - 1;
    let currentNode: ListNode1 | null = this.tail;
    while (currentNode && counter > index && counter >= 0) {
      currentNode = currentNode.previous;
      counter--;
    }
    return currentNode;
  }

  traverseToIndex(index: number): ListNode1 | null {
    if (index < 0 || index >= this.length) {
      console.log("Out of bounds");
      return null;
    }
    if (this.length - index > index) {
      return this.traverseFromHead(index);
    } else {
      return this.traverseFromTail(index);
    }
  }

  remove(index: number) {
    if (index < 0 || index > this.length) {
      return console.log("Out of bounds");
    }

    if (index === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
      }
      this.length--;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    if (!leader || !leader.next) {
      return console.log("Out of bounds");
    }
    const nodeToRemove = leader.next;
    leader.next = nodeToRemove!.next;
    if (nodeToRemove.next?.previous) {
      nodeToRemove.next.previous = leader;
    }
    if (!leader.next) {
      this.tail = leader;
    }
    this.length--;
    return this.printList();
  }
}

const newList1 = new LinkedList1(10);

newList1.prepend(1);
newList1.append(16);
newList1.insert(2, 777);
console.log(newList1.printList());
newList1.remove(3);
console.log(newList1.printList());
