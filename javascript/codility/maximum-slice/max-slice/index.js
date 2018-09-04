console.clear();
// 100% Codility

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // non memory referenced values
  let maxCurrent = A.slice(0, 1)[0];
  let maxGlobal = A.slice(0, 1)[0];

  for (let i = 1; i < A.length; i++) {
    maxCurrent = Math.max(A[i], maxCurrent + A[i]);
    maxGlobal = maxCurrent > maxGlobal ? maxCurrent : maxGlobal;
  }

  return maxGlobal;
}

//console.log(solution([3, 2, -6, 4, 0]));
console.log(solution([1, 1]));
