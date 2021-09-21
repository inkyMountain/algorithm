// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

export function maxProfit(prices: number[]): number {
  console.log('fjslkdjfslkdj');
  
  let lowest = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    const priceToday = prices[i]
    profit = Math.max(profit, priceToday - lowest)
    lowest = Math.min(lowest, priceToday)
  }
  return profit
}
