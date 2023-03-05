//@ts-ignore
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: number[]) {
  let length = array.length;
  for (let index = 0; index < length; index++) {
    let newMinimum: number[] = [array[index], index];
    for (let j = index; j < length; j++) {
      if (array[j] < newMinimum[0]) {
        newMinimum = [array[j], j];
      }
    }
    if (array[index] > newMinimum[0]) {
      let temp = array[index];
      array[index] = newMinimum[0];
      array[newMinimum[1]] = temp;
    }
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
