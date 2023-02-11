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

function firstRecurringCharacter(input: number[]): number | undefined {
  let ocurringNumbers: { [x: number]: boolean } = {};
  for (const iterator of input) {
    if (ocurringNumbers.hasOwnProperty(iterator)) {
      return iterator;
    }
    ocurringNumbers[iterator] = true;
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
