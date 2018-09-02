// BINARY GAP

function solution(N) {
	// write your code in JavaScript (Node.js 8.9.4)
	var binary = parseInt(N, 10);
	binary = binary.toString(2);

	console.log(binary);

	// split based on 1's
	console.log(binary.split('1'));

	binary = binary.split('1');
	var longestStore = 0;

	for (var i = 1; i < binary.length; i++) {
		if (typeof binary[i + 1] === 'undefined') break;
		if (
			(binary[i - 1].includes('0') || binary[i - 1] === '') &&
			(binary[i + 1].includes('0') || binary[i + 1] === '')
		) {
			longestStore = longestStore < binary[i].length ? binary[i].length : longestStore;
		}
	}

	return longestStore;
}
