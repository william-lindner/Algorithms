console.clear();

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxCounter = 0;
  let absoluteMax = 0;

  let hashMap = [];
  let mapIndex = 0;
  hashMap[mapIndex] = {};

  A.map(k => {
    if (1 <= k && k <= N) {
      hashMap[mapIndex][k - 1] = hashMap[mapIndex][k - 1] || 0;
      hashMap[mapIndex][k - 1]++;

      if (hashMap[mapIndex][k - 1] > maxCounter)
        maxCounter = hashMap[mapIndex][k - 1];
    } else if (k === N + 1) {
      mapIndex++;
      hashMap[mapIndex] = {};

      absoluteMax += maxCounter;
      maxCounter = 0;
    }
  });

  let B = Array.from({ length: N }, v => absoluteMax);

  for (let key in hashMap[mapIndex]) {
    B[key] += hashMap[mapIndex][key];
  }

  return B;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4, 6, 6, 6, 6, 6, 6, 6]));
console.log(solution(1, [1]));
