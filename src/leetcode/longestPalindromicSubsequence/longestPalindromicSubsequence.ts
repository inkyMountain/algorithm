// https://leetcode-cn.com/problems/longest-palindromic-subsequence/

export function longestPalindromeSubseq(s: string): number {
  const dp = new Array(s.length).fill(0).map(() => {
    return new Array(s.length).fill(0)
  })

  // loop from bottom to top, because dp[i][j] relies on the i + 1 line.
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        // if j - i <= 1, there exists no shorter range.
        if (j - i <= 1) {
          dp[i][j] = j - i + 1
        } else {
          dp[i][j] = dp[i + 1][j - 1] + 2
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][s.length - 1]
}
