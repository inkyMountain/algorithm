// https://leetcode-cn.com/problems/unique-paths/

/**
 * time complexity: O(m * n)
 * space complexity: O(m * n)
 */
// export function uniquePaths(m: number, n: number): number {
//   const dp = []
//   for (let i = 0; i < n; i++) {
//     dp[0] = dp[0] ?? []
//     dp[0][i] = 1
//   }
//   for (let i = 0; i < m; i++) {
//     dp[i] = dp[i] ?? []
//     dp[i][0] = 1
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//     }
//   }
//   const lastRow = dp[dp.length - 1]
//   return lastRow[lastRow.length - 1]
// }

/**
 * time complexity: O(m * n)
 * space complexity: O(m)
 */
export function uniquePaths(m: number, n: number): number {
  const dp = []
  for (let i = 0; i < n; i++) {
    dp[i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[j] = dp[j] + (dp[j - 1] ?? 0)
    }
  }
  return dp[dp.length - 1]
}
