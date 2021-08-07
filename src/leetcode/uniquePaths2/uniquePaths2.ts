// https://leetcode-cn.com/problems/unique-paths-ii/

/**
 * time complexity: O(m * n)
 * space complexity: O(m * n)
 */
// export function uniquePaths2(m: number, n: number): number {
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
 * space complexity: O(m * n)
 */
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  // initilize the dp array to avoid undefined error
  const dp = new Array(m).fill(0).map(() => [])

  // assign (0, 0) of
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
  for (let i = 1; i < n; i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 ? 0 : dp[0]?.[i - 1] ?? 0
  }
  for (let i = 1; i < m; i++) {
    const isCurrentObstacle = obstacleGrid[i][0] === 1
    const previous = dp[i - 1]?.[0] ?? 0
    dp[i][0] = isCurrentObstacle ? 0 : previous
  }

  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      if (obstacleGrid[y][x] === 1) {
        dp[y][x] = 0
        continue
      }
      const isLeftObstacle = obstacleGrid[y][x - 1] === 1
      const isUpObstacle = obstacleGrid[y - 1][x] === 1
      const dpLeft = isLeftObstacle ? 0 : dp[y][x - 1] ?? 0
      const dpUp = isUpObstacle ? 0 : dp[y - 1][x] ?? 0
      dp[y][x] = dpUp + dpLeft
    }
  }

  const lastRow = dp[dp.length - 1]
  return lastRow[lastRow.length - 1]
}
