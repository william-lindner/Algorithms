console.clear();
// sorting a permutation - find the missing counted value
function solution(A = []) {
  // write your code in JavaScript (Node.js 8.9.4)

  /*
    Check every value against value + 1
    See if it is there.
    If not value + 1 is the missing thinger

    This is a factorial expression without one of the numbers
    Multiple divisibles become possible once the collection becomes
    large enough.

    Count up to the length of the array + 1.
    Each count find out of the value is in the array.
    If the value is missing that's the answer.

    O(2N) - needs to be O(N)
  */

  // return null;

  // for (var i = 1; i <= A.length + 1; i++) {
  // 	// contains layered operations
  // 	if (!A.includes(i)) return i;
  // }

  const length = A.length;
  let total = ((length + 1) * (length + 2)) / 2;

  for (let i = 0; i < length; i++) {
    total -= A[i];
  }

  return total;
}

console.log(solution([1, 2, 3, 45, 5]));
