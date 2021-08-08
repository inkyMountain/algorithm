// https://leetcode-cn.com/problems/unique-binary-search-trees/

/**
 * time complexity: O(?)
 * space complexity: O(?)
 */
export function numTrees(n: number): number {
  const dp = [0, 1]

  for (let i = 2; i <= n; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
      const left = dp[j - 1]
      const right = dp[i - j]
      if (left === 0) {
        sum += right
      }
      if (right === 0) {
        sum += left
      }
      if (left !== 0 && right !== 0) {
        sum += right * left
      }
    }
    dp[i] = sum
  }

  return dp[n]
}
