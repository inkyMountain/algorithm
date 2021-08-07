// https://leetcode-cn.com/problems/min-cost-climbing-stairs/submissions/

export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length
  const dp = []
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i]
  }
  return Math.min(dp[n - 1], dp[n - 2])
}
