interface listItem {
  value: any;
  next: {} | null;
}

class ListNode {
  value: any;
  next: ListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode;
  tail: ListNode;
  length: number;
  constructor(value: any) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value: any) {
    const newNode = new ListNode(value);
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
  printList() {
    let currentNode = this.head;
    const array = [currentNode.value];
    while (currentNode.next) {
      array.push(currentNode.next.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index: number, value: any) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }
    if (index < 1) {
      return this.prepend(value);
    }

    const newNode = new ListNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  traverseToIndex(index: number) {
    //Check parameters
    let counter = 0;
    let currentNode: ListNode = this.head;
    while (counter !== index) {
      if (currentNode.next) {
        currentNode = currentNode.next;
        counter++;
      }
    }
    return currentNode;
  }

  remove(index: number) {
    let leader;
    if (index < 0) {
      return console.log("Out of bounds");
    }
    if (index === 0) {
      if (this.head.next) {
        console.log("here");
        return (this.head = this.head.next);
      } else {
        return console.log("can't delete last item");
      }
    }
    leader = this.traverseToIndex(index - 1);
    if (leader.next) {
      leader.next = leader.next.next;
    }
    this.length--;
    return this.printList();
  }
}

const newList = new LinkedList(10);

newList.prepend(1);
newList.append(16);
newList.append(5);

newList.insert(0, 777);
console.log(newList.printList());
newList.remove(5);
console.log(newList.printList());
