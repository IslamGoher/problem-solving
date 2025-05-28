function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    if (prices[right] <= prices[left]) {
      left++;
      if (left === right) right++;
    } else {
      const currentProfit = prices[right] - prices[left];
      if (currentProfit > profit) profit = currentProfit;
      right++;
    }
  }

  return profit;
}
