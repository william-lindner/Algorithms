// Odd Occurrences
function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	var isolatedValue = A.length === 1 ? A[0] : null;

	// to hold the data as you parse through it
	var evaluatedSet = {};

	A.map((value) => {
		if (typeof evaluatedSet[value] === 'undefined') {
			evaluatedSet[value] = [];
		}

		evaluatedSet[value].push(value);
	});

	// now that the array is linearly sorted find the one that is odd
	for (var value in evaluatedSet) {
		if (evaluatedSet[value].length % 2 !== 0) {
			isolatedValue = value;
			break;
		}
	}

	return isolatedValue;
}
