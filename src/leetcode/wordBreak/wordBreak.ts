// https://leetcode-cn.com/problems/word-break/

export function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(true)
  dp[0] = true
  for (let i = 0; i < wordDict.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      if (dp[j - 1]) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
      }
    }
  }
  return dp[s.length]
}
