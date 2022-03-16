/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let doesFirstRowContainsZero = false
  let doesFirstColumnContainsZero = false
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      doesFirstColumnContainsZero = true
      break
    }
  }
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      doesFirstRowContainsZero = true
      break
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0
        matrix[row][0] = 0
      }
    }
  }

  // 处理第一列
  for (let row = 1; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      matrix[row].fill(0)
    }
  }

  // 处理第一行
  for (let col = 1; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 0; row < matrix.length; row++) {
        matrix[row][col] = 0
      }
    }
  }
  if (doesFirstRowContainsZero) {
    matrix[0].fill(0)
  }
  if (doesFirstColumnContainsZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0
    }
  }
  // console.log(matrix)
}
// @lc code=end

// console.log(
// setZeroes([
//   [1, 2, 3, 4],
//   [1, 0, 3, 4],
//   [1, 2, 3, 4],
// ])
// setZeroes([
//   [-4, -2, 6, -7, 0],
//   [-8, 6, -8, -6, 0],
//   [2, 2, -9, -6, -10],
// ])
// )
