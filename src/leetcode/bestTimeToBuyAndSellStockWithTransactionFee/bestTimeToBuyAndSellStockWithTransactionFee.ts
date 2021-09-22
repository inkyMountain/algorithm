// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

// without rolling array
// export function maxProfit(prices: number[], fee: number): number {
//   const dp = new Array(prices.length)
//     .fill(0)
//     .map(() => new Array(2).fill(0).map(() => -Infinity))
//   dp[0][0] = 0
//   dp[0][1] = -prices[0]
//   for (let i = 1; i < prices.length; i++) {
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
//     dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
//   }
//   return dp[prices.length - 1][0]
// }

// with rolling array, minus fee when **sell**
// export function maxProfit(prices: number[], fee: number): number {
//   let profit0 = 0
//   let profit1 = -prices[0]
//   for (let i = 1; i < prices.length; i++) {
//     profit0 = Math.max(profit0, profit1 + prices[i] - fee)
//     profit1 = Math.max(profit0 - prices[i], profit1)
//   }
//   return profit0
// }

// with rolling array, minus fee when **buy**
export function maxProfit(prices: number[], fee: number): number {
  let profit0 = 0
  let profit1 = -prices[0] - fee
  for (let i = 1; i < prices.length; i++) {
    profit0 = Math.max(profit0, profit1 + prices[i])
    profit1 = Math.max(profit0 - prices[i] - fee, profit1)
  }
  return profit0
}
