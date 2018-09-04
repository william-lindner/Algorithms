console.clear();

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // iterate through the array and find the smallest positive whole number that does not occur in A
  // the numbers are not sorted
  // one demo case has skipping of numbers [-1, -3] and returns 1 because while it is missing 2 it first is missing 1
  // looking for the SMALLEST positive integer
  // numbers can repeat

  if (A.length < 1) {
    return (A[0] < 1 ? 1 : A[0] + 1) || 1;
  }

  A.sort((a, b) => a - b);

  return A.reduce((prev, next) => {
    if (next > -1 && next === prev) {
      prev++;
    }
    return prev;
  }, 1);
}

console.log('solved - %s', solution([1, 3, 6, 4, 1, 2]));
// console.log('solved - %s', solution([-1, -3]));
// console.log('solved - %s', solution([2]));
// console.log(
//   'solved - %s',
//   solution([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 100])
// );
