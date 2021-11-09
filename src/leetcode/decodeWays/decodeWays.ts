// https://leetcode-cn.com/problems/decode-ways/submissions/

export function numDecodings(s: string): number {
  const dp = []
  dp[0] = parseInt(s[0]) === 0 ? 0 : 1

  if (s[0] === '0') {
    return 0
  }

  for (let i = 1; i < s.length; i++) {
    const current = parseInt(s[i])
    const prev = parseInt(s[i - 1])
    const join = prev * 10 + current
    // if current is 0, dp[i] can only possibly move from dp[i - 2]
    if (current === 0) {
      if (join <= 26 && join > 0) {
        dp[i] = dp[i - 2] ?? 1
        continue
      } else {
        return 0
      }
    }

    // if current isn't 0, dp[i] can possibly move from dp[i - 1] and dp[i - 2]
    dp[i] = dp[i - 1]
    if (prev === 0) {
      dp[i] = dp[i - 1]
    } else if (join <= 26 && join > 0) {
      dp[i] += dp[i - 2] ?? 1
    }
  }
  return dp[s.length - 1]
}
