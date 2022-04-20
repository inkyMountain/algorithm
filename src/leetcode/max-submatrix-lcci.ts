// https://leetcode-cn.com/problems/max-submatrix-lcci/

/**
 * 回顾一维数组的最大子数组和，使用了贪心的方法。
 * 从下标0开始算累计和，如果累计和小于0，则舍弃这段子数组，
 * 从新的下标开始，重新计算累计和。
 * 比如这个数组：[1, 2, -4, 5, 2, -3, -10, 3, 6]，
 * 1, 2, -4 的累计和小于0，
 * 5, 2, -3, -10 的累计和小于0，
 * 所以3 + 6是和最大的子数组。
 *
 * 扩展到二维数组，当选定一个区域后，如果将区域内所有列的数字相加，
 * 就可以得到一个一维数组，然后使用一维数组的贪心方法，找出最大和的起始和终点。
 * 具体的，首先在 [0, matrix.length - 1] 的范围内选择一个起始行(upper)，
 * 然后遍历 [upper, matrix.length - 1] 范围，将当前遍历行作为终点(lower)。
 * 将起始行和终点行之间的每一列数字相加，令其成为一维数组，使用一维数组的方法找出最大和。
 * 由于遍历顺序是从上往下的，处理当前行时，可以复用上一行计算出的列数字之和，
 * 从而降低求和的时间复杂度。
 */
function getMaxMatrix(matrix: number[][]): number[] {
  const colSum = new Array(matrix[0].length).fill(0)
  const result = new Array(4)
  let max = -Infinity
  for (let upper = 0; upper < matrix.length; upper++) {
    for (let i = 0; i < colSum.length; i++) {
      colSum[i] = 0
    }
    for (let lower = upper; lower < matrix.length; lower++) {
      const currentRow = matrix[lower]
      let start = 0
      let sum = 0
      for (let col = 0; col < currentRow.length; col++) {
        colSum[col] += currentRow[col]
        if (sum < 0) {
          sum = 0
          start = col
        }
        sum += colSum[col]
        if (sum > max) {
          result[0] = upper
          result[1] = start
          result[2] = lower
          result[3] = col
          max = sum
        }
      }
    }
  }
  return result
}

/**
 * 首先遍历matrix中的每个cell，求出二维版的前缀和。
 * 然后枚举矩形的左上顶点和右下顶点，算出对应的和。
 * 如果和超过了当前遇到的最大和，则代替最大和，成为新的最大和。
 */
// function getMaxMatrix(matrix: number[][]): number[] {
//   const prefix = new Array(matrix.length).fill(0).map(() => {
//     return new Array<number>(matrix[0].length).fill(0)
//   })

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       const up = prefix[row - 1]?.[col] ?? 0
//       const left = prefix[row]?.[col - 1] ?? 0
//       const leftUp = prefix[row - 1]?.[col - 1] ?? 0
//       prefix[row][col] = up + left + matrix[row][col] - leftUp
//     }
//   }

//   let max = -Infinity
//   let result = new Array(4)
//   for (let r1 = 0; r1 < matrix.length; r1++) {
//     for (let c1 = 0; c1 < matrix[0].length; c1++) {
//       for (let r2 = r1; r2 < matrix.length; r2++) {
//         for (let c2 = c1; c2 < matrix[0].length; c2++) {
//           const currentSum =
//             (prefix[r2]?.[c2] ?? 0) -
//             (prefix[r2]?.[c1 - 1] ?? 0) -
//             (prefix[r1 - 1]?.[c2] ?? 0) +
//             (prefix[r1 - 1]?.[c1 - 1] ?? 0)
//           if (currentSum > max) {
//             result = [r1, c1, r2, c2]
//             max = currentSum
//           }
//         }
//       }
//     }
//   }
//   return result
// }
/**
 * -1 -1
 * -1 -2
 */
console.log(
  getMaxMatrix([
    [-1, 0],
    [0, -1],
  ])
)
