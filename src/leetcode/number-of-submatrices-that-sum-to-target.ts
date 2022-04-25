/*
 * @lc app=leetcode.cn id=1074 lang=typescript
 *
 * [1074] 元素和为目标值的子矩阵数量
 */

// @lc code=start
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const rowNumber = matrix.length,
    colNumber = matrix[0].length
  const colSum = new Array(colNumber).fill(0)
  let result = 0
  for (let start = 0; start < rowNumber; start++) {
    for (let col = 0; col < colNumber; col++) {
      colSum[col] = 0
    }
    for (let end = start; end < rowNumber; end++) {
      // count prefix sum's amount, cause prefix sum can be duplicate.
      const prefixMap: Record<number, number> = {0: 1}
      let sum = 0
      for (let col = 0; col < colNumber; col++) {
        colSum[col] += matrix[end][col]
        sum = sum + colSum[col]
        result += prefixMap[sum - target] || 0
        prefixMap[sum] = prefixMap[sum] || 0
        prefixMap[sum]++
      }
    }
  }
  return result
}
// @lc code=end

console.log(
  numSubmatrixSumTarget(
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    0
  ),
  numSubmatrixSumTarget(
    [
      [1, -1],
      [-1, 1],
    ],
    0
  )
)
