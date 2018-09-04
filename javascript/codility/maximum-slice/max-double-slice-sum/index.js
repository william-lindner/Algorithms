// 0 <= X < Y < Z < N
console.clear();

function solution(A) {
  // A[X + 1] + A[X + 2] + A[Y-1] + A[Y + 1] + A[Y + 2] + A[Z - 1]
  function triplet(x, y, z) {}

  console.log(A.slice(0 + 1, 3), A.slice(3 + 1, 3 + 2), A.slice(6 - 1, 6));
  console.log(A.slice(0 + 1, 3), A.slice(3 + 1, 3 + 3), A.slice(7 - 1, 7));
  console.log(A.slice(3 + 1, 3), A.slice(4 + 1, 4 + 1), A.slice(5, 5));

  var N = 8;
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));
