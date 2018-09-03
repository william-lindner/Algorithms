console.clear();

function maxStockProfit(prices) {
  // takes in array of prices as parameter
  // returns the max possible profit of the day
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (var i = 0; i < prices.length; i++) {
    buyPrice = changeBuyPrice ? prices[i] : buyPrice;
    sellPrice = prices[i + 1];

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
