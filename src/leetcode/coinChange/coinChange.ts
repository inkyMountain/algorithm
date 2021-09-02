// https://leetcode-cn.com/problems/coin-change/

export function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j >= coins[i]) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
      }
    }
  }
  const result = dp[amount]
  return result === Infinity ? -1 : result
}
