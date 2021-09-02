// https://leetcode-cn.com/problems/coin-change-2/

export function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[dp.length - 1]
}
