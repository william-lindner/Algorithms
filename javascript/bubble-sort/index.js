console.clear();

function bubbleSort(array) {
  // return array, sorted with bubble sort
  for (let i = array.length; i > 0; i--) {
    for (let c = 0; c < i; c++) {
      if (array[c] > array[c + 1]) {
        let cpArray = array.slice();
        let temp = cpArray[c];
        array[c] = array[c + 1];
        array[c + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([5, 3, 2, 4, 8]));

console.log(bubbleSort([1, 2, 3, 4, 5, 6]));
