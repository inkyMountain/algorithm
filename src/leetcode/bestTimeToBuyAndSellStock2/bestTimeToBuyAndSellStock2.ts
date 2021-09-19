// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
export function maxProfit(prices: number[]): number {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    const delta = prices[i] - prices[i - 1]
    if (delta > 0) {
      profit += delta
    }
  }
  return profit
}
