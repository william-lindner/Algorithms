console.clear();

function binarySearch(numbers, key) {
  var middleIndex = Math.floor(numbers.length / 2);
  var middleElement = numbers[middleIndex];

  if (middleElement === key) {
    return true;
  } else if (middleElement < key && numbers.length > 1) {
    return binarySearch(numbers.splice(middleIndex), key);
  } else if (middleElement > key && numbers.length > 1) {
    return binarySearch(numbers.splice(0, middleIndex), key);
  } else {
    return false;
  }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 299));
