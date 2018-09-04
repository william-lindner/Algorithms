console.clear();

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // var N = A.length;
  // var newA = [];
  // var B = A.filter(v => {
  //   if (v === 1) newA.push(v);
  //   return v === 0;
  // });

  // iterate through the array
  // create index at location for the zero
  // increment each new index when it passes a car
  // maintain a rolling sum of the values
  // if that rolling sum is ever > A.length break and return A.length

  let passing = 0,
    ones = 0;
  for (var i = A.length - 1; i >= 0; i--) {
    if (A[i] === 0) {
      passing += ones;
      if (passing > 1000000000) {
        return -1;
      }
    } else {
      ones++;
    }
  }

  return passing;
}

console.log(solution([1, 0, 1]));
