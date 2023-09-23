//@ts-ignore
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]) {
  let end = array.length - 1;
  while (true) {
    let numberOfFixes = 0;
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        numberOfFixes++;
        let left = array[i];
        array[i] = array[i + 1];
        array[i + 1] = left;
      }
    }
    if (numberOfFixes === 0) {
      break;
    }
    end--;
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);
