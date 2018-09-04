console.clear();
// 88% codility
// fails on time complexity

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  function primeDivisors(n) {
    var factors = {};
    var divisor = 2;

    while (n >= 2) {
      if (n % divisor === 0) {
        factors[divisor] = divisor;
        n = n / divisor;
      } else {
        divisor++;
      }
    }

    return Object.values(factors);
  }

  // console.log(primeDivisors(2));

  var samesies = 0;
  for (let i = 0; i < A.length; i++) {
    if (
      JSON.stringify(primeDivisors(A[i])) ===
      JSON.stringify(primeDivisors(B[i]))
    )
      samesies++;
  }

  //console.log(samesies);
  return samesies;
}

solution([15, 10, 3], [75, 30, 5]);
//solution([1], [1]);
