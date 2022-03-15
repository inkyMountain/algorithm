// leetcode 54
export function spiralOrder(matrix: number[][]): number[] {
  const rowNumber = matrix.length
  const colNumber = matrix[0].length
  const result: number[] = []
  function printSurrounding(row: number, col: number) {
    if (row > (rowNumber - 1) >> 1 || col > (colNumber - 1) >> 1) {
      return
    }
    const top = row,
      left = col,
      bottom = rowNumber - row - 1,
      right = colNumber - col - 1
    // 上
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    // 右
    for (let i = top + 1; i < bottom; i++) {
      result.push(matrix[i][right])
    }
    // 下
    if (top !== bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
    }
    // 左
    if (right !== left) {
      for (let i = bottom - 1; i > top; i--) {
        result.push(matrix[i][left])
      }
    }
    printSurrounding(left + 1, top + 1)
  }
  printSurrounding(0, 0)
  return result
}
