// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

export function maxProfit(prices: number[]): number {
  let lowest = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    const priceToday = prices[i]
    profit = Math.max(profit, priceToday - lowest)
    lowest = Math.min(lowest, priceToday)
  }
  return profit
}

// 股票问题的通解
// function maxProfit(prices: number[]): number {
//   const dp: number[][][] = new Array(prices.length).fill(0).map(() => {
//     return new Array(2).fill(0).map(() => {
//       return []
//     })
//   })
//   dp[-1] = [[], []]
//   dp[-1][0][0] = 0
//   dp[-1][0][1] = -Infinity
//   dp[-1][1][0] = -Infinity
//   dp[-1][1][1] = -Infinity

//   for (let i = 0; i < prices.length; i++) {
//     dp[i][1][0] = Math.max(dp[i - 1][1][1] + prices[i], dp[i - 1][1][0])
//     dp[i][1][1] = Math.max(-prices[i], dp[i - 1][1][1])
//   }

//   return Math.max(dp[prices.length - 1][1][0], 0)
// }
