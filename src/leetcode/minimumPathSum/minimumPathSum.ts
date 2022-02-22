export function minPathSum(grid: number[][]): number {
  const dp = new Array(grid[0].length).fill(0)
  dp.forEach((num, index) => {
    const previous = dp[index - 1] ?? 0
    dp[index] = previous + grid[0][index]
  })
  for (let y = 1; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const up = dp[x] ?? 0
      const left = dp[x - 1] ?? 0
      dp[x] = (x === 0 ? up : Math.min(up, left)) + grid[y][x]
    }
  }
  return dp[dp.length - 1]
}

// export function minPathSum(grid: number[][]): number {
//   const dp = new Array(grid.length)
//     .fill(0)
//     .map((row, index) => new Array(grid[index].length).fill(0))
//   dp[0].forEach((num, index, firstRow) => {
//     const previous = firstRow[index - 1] ?? 0
//     firstRow[index] = previous + grid[0][index]
//   })
//   dp.forEach((row, index) => {
//     const previousRow = dp[index - 1]
//     const previous = previousRow ? previousRow[0] : 0
//     row[0] = grid[index][0] + previous
//   })
//   for (let y = 1; y < grid.length; y++) {
//     for (let x = 1; x < grid[y].length; x++) {
//       dp[y][x] = Math.min(dp[y - 1][x], dp[y][x - 1]) + grid[y][x]
//     }
//   }
//   const lastRow = dp[dp.length - 1]
//   return lastRow[lastRow.length - 1]
// }
