function quickSort(numbers: number[]): number[] {
  if (numbers.length <= 1) return numbers;
  let left: number[] = [];
  let right: number[] = [];
  let pivot: number | undefined = numbers.pop();
  if (pivot === undefined) {
    console.log("array is empty");
    return [];
  } else {
    numbers.map((num) => {
      if (pivot !== undefined) {
        num < pivot ? left.push(num) : right.push(num);
      }
    });
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
}
