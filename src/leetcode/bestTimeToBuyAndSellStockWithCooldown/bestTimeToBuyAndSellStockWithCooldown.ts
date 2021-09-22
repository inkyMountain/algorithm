// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
export function maxProfit(prices: number[]): number {
  const dp = new Array(prices.length).fill(0).map(() => {
    return new Array(2).fill(0).map(() => 0)
  })
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // pay attention to bracket of turnary operator.
    // minus has a higher priority of turnary operator.
    // if the bracket is removed, the result would be wrong.
    dp[i][1] = Math.max((i < 2 ? 0 : dp[i - 2][0]) - prices[i], dp[i - 1][1])
  }
  return dp[prices.length - 1][0]
}
