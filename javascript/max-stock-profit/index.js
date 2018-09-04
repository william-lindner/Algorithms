console.clear();

function maxStockProfit(A) {
  // takes in array of A as parameter
  // returns the max possible profit of the day
  var maxProfit = 0;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (var i = 0; i < A.length; i++) {
    buyPrice = changeBuyPrice ? A[i] : buyPrice;
    sellPrice = A[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      maxProfit = tempProfit > maxProfit ? tempProfit : maxProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

// if no profit is possible, return -1
// a max profit of 0 is

console.log(maxStockProfit([200, 211, 199, 204, 205]));
