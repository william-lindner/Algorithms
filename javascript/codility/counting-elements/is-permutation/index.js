console.clear();

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // smallest to greatest
  A.sort((a, b) => a - b);

  if (A[0] !== 1) return 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) return 0;
    if (A[i] > A[i - 1] + 1) return 0;
  }

  return 1;
}

console.log(solution([4, 1, 3, 2]));
console.log('******************');
console.log(solution([4, 1, 3]));
