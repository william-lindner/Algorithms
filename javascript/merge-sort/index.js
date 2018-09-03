console.clear();

function mergeSort(array) {
  // take in a single, unsorted array as a parameter
  // split the array into two halves

  if (array.length < 2) return array;
  var middleIndex = Math.floor(array.length / 2);
  var firstHalf = array.slice(0, middleIndex);
  var secondHalf = array.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  // takes in two sorted arrays as parameters
  // merges those sorted arrays into one sorted array
  // returns one sorted array
  let result = [];
  while (array1.length && array2.length) {
    let minElement = array1[0] < array2[0] ? array1.shift() : array2.shift();
    result.push(minElement);
  }

  return result.concat(array1.length ? array1 : array2);
}

console.log(mergeSort([2, 35, 61, -9, 6, 2]));
