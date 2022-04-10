/*
 * @lc app=leetcode.cn id=329 lang=typescript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
function longestIncreasingPath(matrix: number[][]): number {
  let result = -Infinity
  const rowNumber = matrix.length
  const colNumber = matrix[0].length
  const directions = [
    // delta of coordinates of up, right, down, left
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]

  // memorize the longest increasing path length of every cell
  const memory: number[][] = new Array(rowNumber).fill(0).map(() => {
    return new Array(colNumber).fill(null)
  })

  function isInMatrix(row: number, col: number) {
    return row >= 0 && row < rowNumber && col >= 0 && col < colNumber
  }
  function isStrictlyGreater({row: row1, col: col1}, {row: row2, col: col2}) {
    return matrix[row1]?.[col1] > matrix[row2]?.[col2]
  }
  function memorize(row: number, col: number, value: number) {
    memory[row] = memory[row] || []
    memory[row][col] = value
  }

  function dfs(row: number, col: number) {
    // reuse memorized length of this cell
    if (memory[row]?.[col] !== null) {
      return memory[row][col]
    }

    let max = 0
    // otherwise continue dfs
    for (const delta of directions) {
      const [deltaRow, deltaCol] = delta
      const nextRow = row + deltaRow
      const nextCol = col + deltaCol
      const isGreaterThanCurrent = isStrictlyGreater(
        {row: nextRow, col: nextCol},
        {row, col}
      )
      // conditionally dfs
      if (
        // isInMatrix could be omitted. but it's more semantic.
        isInMatrix(nextRow, nextCol) &&
        isGreaterThanCurrent
      ) {
        const length = dfs(nextRow, nextCol)
        max = Math.max(max, length)
      }
    }
    memorize(row, col, max + 1)
    result = Math.max(max + 1, result)
    return max + 1
  }

  for (let row = 0; row < rowNumber; row++) {
    for (let col = 0; col < colNumber; col++) {
      dfs(row, col)
    }
  }

  return result
}
// @lc code=end

describe('longest-increasing-path-in-a-matrix', () => {
  test('1', () => {
    expect(longestIncreasingPath([[1, 2, 3]])).toStrictEqual(3)

    expect(
      longestIncreasingPath([
        [1, 2, 3],
        [6, 5, 4],
      ])
    ).toStrictEqual(6)

    expect(
      longestIncreasingPath([
        [1, 2, 3],
        [3, 5, 4],
      ])
    ).toStrictEqual(5)
  })
})
