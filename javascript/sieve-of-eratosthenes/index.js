console.clear();

function sieveOfEratosthenes(n) {
  // return all prime numbers up
  // to `num` in array

  let primeValues = [];

  for (let i = 0; i <= n; i++) {
    if (i < 2) primeValues.push(false);
    else primeValues.push(true);
  }

  const maxIterator = Math.floor(Math.sqrt(n));

  for (var i = 2; i <= maxIterator; i++) {
    for (let j = 2; j * i <= n; j++) {
      primeValues[j * i] = false;
    }
  }

  console.log('Breakpoint - [maxIterator]', maxIterator);

  return primeValues.reduce(
    (returnArray, value, i) => (value ? [...returnArray, i] : returnArray),
    []
  );
}

console.log(sieveOfEratosthenes(200));

// starting from index A find all the numbers divisible by A in the remainder of the array
