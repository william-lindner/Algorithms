console.clear();

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let N = A.length;

  if (N === 0) return 0;
  if (N === 1) return A[0];

  let R = A[0] + A[N - 1];

  if (N <= 2) return R;

  const slices = Math.ceil(N / 6);

  function _maxSum(S, M) {
    let R = S;
    let atIndex = 0;
    for (let i = 0; i < M.length; i++) {
      let C = Math.max(R, R + M[i]);
      R = C > R ? C : R;
    }

    return {
      sum: R,
      index: atIndex
    };
  }

  let K = 0;

  while (K < N - 1) {
    let r = _maxSum(R, A.slice(K + 1, K + 7 > N - 1 ? N - 1 : K));
    R = r.sum;
    K += r.index + 1;
  }

  console.log(R);
}

solution([1, -2, 0, 9, -1, -2]);
