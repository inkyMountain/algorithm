// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
export function maxProfit(k: number, prices: number[]): number {
  if (prices.length === 0) {
    return 0
  }
  // .fill(0).map() CAN'T be shortened as .fill()!!,
  // or there would be only one object instead of an amount of prices' length.
  const dp = new Array(prices.length).fill(0).map(() => {
    return new Array(k + 1).fill(0).map(() => new Array(2).fill(0))
  })
  for (let i = 0; i < prices.length; i++) {
    dp[i][0][0] = 0
  }
  for (let i = 1; i <= k; i++) {
    dp[0][i][0] = 0
    dp[0][i][1] = -prices[0]
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = k; j > 0; j--) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j - 1][0] - prices[i], dp[i - 1][j][1])
    }
  }

  const result = dp[prices.length - 1][k][0]
  return result
}
