// const string: string = "Hi, my name is Mikhail";

// function reverseString(string: string): string {
//   return string.split("").reverse().join("");
// }

// console.log(reverseString(string));

// const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// };

// console.log(mergeSortedArrays([1, 2, 3, 66], [4, 5, 115]));

// function twoSum(nums: number[], target: number): number[] {
//   const numbersObj: { [key: number]: any } = {};
//   for (const iterator in nums) {
//     if (numbersObj[nums[iterator]]) {
//       return [iterator, numbersObj[nums[iterator]]];
//     }
//     numbersObj[target - nums[iterator]] = iterator;
//   }
//   return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9));

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input: number[]): number | undefined {
//   let ocurringNumbers: { [x: number]: boolean } = {};
//   for (const iterator of input) {
//     if (ocurringNumbers.hasOwnProperty(iterator)) {
//       return iterator;
//     }
//     ocurringNumbers[iterator] = true;
//   }
//   return undefined;
// }

// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

class Stack2 {
  data: any[];
  constructor() {
    this.data = [];
  }
  pop() {
    return this.data.pop();
  }
  push(value: any) {
    return this.data.push(value);
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return !this.data.length;
  }
}

class MyQueue1 {
  stack: Stack2;
  headStack: Stack2;
  constructor() {
    this.stack = new Stack2();
    this.headStack = new Stack2();
  }

  push(x: number): void {
    const length = this.headStack.data.length;
    for (let i = 0; i < length; i++) {
      this.stack.push(this.headStack.pop());
    }
    this.stack.push(x);
  }

  pop(): number {
    const length = this.stack.data.length;
    for (let i = 0; i < length; i++) {
      this.headStack.push(this.stack.pop());
      console.log(this.headStack);
    }
    return this.headStack.pop();
  }

  peek(): number {
    if (this.headStack.isEmpty()) {
      return this.stack.data[0];
    }
    return this.headStack.data[this.headStack.data.length - 1];
  }

  empty(): boolean {
    return this.headStack.isEmpty() && this.stack.isEmpty();
  }
}

const q = new MyQueue1();
q.push(1);
q.push(2);
// q.push(3);
// q.push(4);
// q.push(5);
// console.log(q);
// console.log(q.peek());
console.log(q.pop());
// console.log(q.peek());

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
