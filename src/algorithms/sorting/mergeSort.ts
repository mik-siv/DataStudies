//@ts-ignore
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): any {
  if (array.length === 1) {
    return array;
  }
  let halfsize: number =
    array.length > 2 ? Math.floor(array.length / 2) : array.length / 2;
  let left: number[] = array.slice(0, halfsize);
  let right: number[] = array.slice(halfsize, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  if (left && right) {
    let result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.splice(i)).concat(right.splice(j));
  } else if (!right && left) {
    return left;
  } else if (!left && right) {
    return right;
  } else {
    console.log("invalid input: ", left, right);
  }
}

const answer = mergeSort(numbers);
console.log("result", answer);
