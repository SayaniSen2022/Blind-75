/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
*/

const prices = [10, 1, 5, 6, 7, 1];

const maxProfit = (prices) => {
  let l = 0;
  let r = 1;
  let maxP = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxP = Math.max(maxP, profit);
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
};

const result = maxProfit(prices);
console.log(result);

//dynamic solution
/*
const maxProfit = (prices) => {
  let maxP = 0;
  let minBuy = prices[0];

  for (let sell of prices) {
    maxP = Math.max(maxP, sell - minBuy);
    minBuy = Math.min(minBuy, sell);
  }
  return maxP;
};
*/
