//@ts-ignore
class ListNode {
  value: any;
  next: ListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: ListNode | null;
  bottom: ListNode | null;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value: any) {
    const newNode: ListNode = new ListNode(value);
    if (!this.top && !this.bottom) {
      this.top = newNode;
      this.bottom = this.top;
    } else if (this.top) {
      const holdingPointer: ListNode = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this.top;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    if (this.top) {
      const topNode = this.top;
      if (this.bottom === this.top) {
        this.bottom = null;
      } else {
        this.top = this.top.next;
      }
      this.length--;
      return topNode;
    }
  }
  isEmpty() {
    return !this.top && !this.bottom;
  }
}
