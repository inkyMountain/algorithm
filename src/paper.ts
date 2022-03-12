/**
 * dp[i][k][j]
 * dp[天数][是否持有股票]
 * dp[-1][0][0] = 0
 * dp[-1][0][1] = -Infinity
 * dp[-1][1][0] = 0
 * dp[-1][1][1] = -Infinity
 */

function maxProfit(prices: number[]): number {
  const dp: number[][][] = new Array(prices.length).fill(0).map(() => {
    return new Array(2).fill(0).map(() => {
      return []
    })
  })
  dp[-1] = [[], []]
  dp[-1][0][0] = 0
  dp[-1][0][1] = -Infinity
  dp[-1][1][0] = -Infinity
  dp[-1][1][1] = -Infinity

  for (let i = 0; i < prices.length; i++) {
    dp[i][1][0] = Math.max(dp[i - 1][1][1] + prices[i], dp[i - 1][1][0])
    dp[i][1][1] = Math.max(-prices[i], dp[i - 1][1][1])
  }

  return Math.max(dp[prices.length - 1][1][0], 0)
}

console.log(maxProfit([7, 6, 4, 3, 1]))
// console.log(maxProfit([7, 6, 4, 3, 8]))
console.log(maxProfit([7, 1, 5, 3, 6, 4]))

/**
T[i][1][0] = max(T[i - 1][1][0], T[i - 1][1][1] + prices[i])
T[i][1][1] = max(T[i - 1][1][1], T[i - 1][0][0] - prices[i]) = max(T[i - 1][1][1], -prices[i])

 */
