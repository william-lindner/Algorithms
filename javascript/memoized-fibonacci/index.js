console.clear();

function fibMemo(index, cache = []) {
  // index: index of number in fobonacci sequence
  // cache: an array used as memory

  if (cache[index]) return cache[index];
  else {
    if (index === 0) return 0;
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}

console.log(fibMemo(1000));
