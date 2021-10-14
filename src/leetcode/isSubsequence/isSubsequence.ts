// double pointers solution
// time complexity: O(m), m means length of t.
// export function isSubsequence(s: string, t: string): boolean {
//   let sp = 0
//   let tp = 0
//   while (sp < s.length && tp < t.length) {
//     if (s[sp] === t[tp]) {
//       sp++
//       tp++
//     } else {
//       tp++
//     }
//   }
//   console.log(sp)
//   return sp === s.length
// }

// dp solution
// export function isSubsequence(s: string, t: string): boolean {
//
// }

export function isSubsequence(text1: string, text2: string): boolean {
  const n = text1.length,
    m = text2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 0; i < n; i++) {
    dp[i][0] = 0
  }
  for (let j = 0; j < m; j++) {
    dp[0][j] = 0
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  console.log('dp ==========>', dp)
  return dp[n][m]
}

const result = isSubsequence('b', 'yby')
console.log('result ==========>', result)
