//@ts-ignore
export class ListNode {
  value: any;
  next: ListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

//@ts-ignore
class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  constructor(value: any) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any) {
    const newNode = new ListNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this.head;
  }

  prepend(value: any) {
    const list = this.head;
    this.head = { value, next: list };
    this.length++;
    return this.head;
  }

  printList() {
    let currentNode: ListNode | null = this.head;
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
    const newNode = new ListNode(value);
    const leader = this.traverseToIndex(index - 1);
    if (leader && leader.next) {
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }
  }

  traverseToIndex(index: number): ListNode | null {
    let counter = 0;
    let currentNode: ListNode | null = this.head;
    while (currentNode && counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
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
    if (!leader.next) {
      this.tail = leader;
    }
    this.length--;
    return this.printList();
  }
}
