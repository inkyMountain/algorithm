/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 */

// @lc code=start
function numDistinct(s: string, t: string): number {
  const dp = []
  for (let i = -1; i < s.length; i++) {
    dp[i] = []
    for (let j = -1; j < t.length; j++) {
      if (j === -1) {
        dp[i][j] = 1
      } else {
        dp[i][j] = 0
      }
    }
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[s.length - 1][t.length - 1]
}
// @lc code=end

// should be 2
console.log(numDistinct('aabcba', 'abc'))
