// CyclicRotation
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
	// write your code in JavaScript (Node.js 8.9.4)

	for (var i = 0; i < K; i++) {
		var popStore = A.pop();
		A.unshift(popStore);
	}

	return typeof A[0] === 'undefined' ? [] : A;
}
