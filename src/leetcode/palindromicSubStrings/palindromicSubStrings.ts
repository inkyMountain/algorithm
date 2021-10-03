// https://leetcode-cn.com/problems/palindromic-substrings/

export function countSubstrings(s: string): number {
  const dp = new Array(s.length).fill(0).map(() => {
    return new Array(s.length).fill(false)
  })

  let total = 0

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true
          total++
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true
          total++
        } else {
          dp[i][j] = false
        }
      }
    }
  }

  return total
}
