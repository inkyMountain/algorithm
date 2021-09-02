// https://leetcode-cn.com/problems/ones-and-zeroes/

export function completeBag(): number {
  const weights = [1, 3, 4]
  const values = [15, 20, 30]
  const dp = []
  const bagWeight = 4
  dp[0] = 0
  for (let i = 0; i < values.length; i++) {
    for (let j = weights[i]; j <= bagWeight; j++) {
      dp[j] = Math.max(dp[j] ?? 0, (dp[j - weights[i]] ?? 0) + values[i])
    }
  }
  return dp[dp.length - 1]
}
