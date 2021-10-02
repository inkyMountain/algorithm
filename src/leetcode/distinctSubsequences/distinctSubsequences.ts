// https://leetcode-cn.com/problems/distinct-subsequences/

// solution without storage optimization
// export function numDistinct(s: string, t: string): number {
//   const dp = new Array(s.length + 1).fill(0).map(() => {
//     return new Array(t.length + 1).fill(0)
//   })

//   for (let i = 0; i <= s.length; i++) {
//     dp[i][0] = 1
//   }

//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 1; j <= t.length; j++) {
//       if (s[i - 1] === t[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
//       } else {
//         dp[i][j] = dp[i - 1][j]
//       }
//     }
//   }
//   return dp[s.length][t.length]
// }

// storage optimized solution
export function numDistinct(s: string, t: string): number {
  const dp = new Array(t.length + 1).fill(0)

  dp[0] = 1

  for (let i = 1; i <= s.length; i++) {
    // reverse loop direction to access stale data
    for (let j = t.length; j > 0; j--) {
      if (s[i - 1] === t[j - 1]) {
        dp[j] = dp[j - 1] + dp[j]
      } else {
        dp[j] = dp[j]
      }
    }
  }
  return dp[t.length]
}
