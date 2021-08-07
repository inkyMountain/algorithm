// https://leetcode-cn.com/problems/integer-break/
/**
 * time complexity: O(n^2)
 * space complexity: O(n)
 */
export function integerBreak(n: number): number {
  const dp = []
  dp[1] = 0
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // initilize dp[i] with zero or the Math.max would return NaN for
      // one of its param is undefined.
      dp[i] = dp[i] ?? 0
      dp[i] = Math.max(dp[i], Math.max(j * dp[i - j], j * (i - j)))
    }
  }

  return dp[n]
}
