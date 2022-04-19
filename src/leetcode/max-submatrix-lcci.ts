// https://leetcode-cn.com/problems/max-submatrix-lcci/

/**
 * 首先遍历matrix中的每个cell，求出二维版的前缀和。
 * 然后枚举矩形的左上顶点和右下顶点，算出对应的和。
 * 如果和超过了当前遇到的最大和，则代替最大和，成为新的最大和。
 */
function getMaxMatrix(matrix: number[][]): number[] {
  const prefix = new Array(matrix.length).fill(0).map(() => {
    return new Array<number>(matrix[0].length).fill(0)
  })

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const up = prefix[row - 1]?.[col] ?? 0
      const left = prefix[row]?.[col - 1] ?? 0
      const leftUp = prefix[row - 1]?.[col - 1] ?? 0
      prefix[row][col] = up + left + matrix[row][col] - leftUp
    }
  }

  let max = -Infinity
  let result = new Array(4)
  for (let r1 = 0; r1 < matrix.length; r1++) {
    for (let c1 = 0; c1 < matrix[0].length; c1++) {
      for (let r2 = r1; r2 < matrix.length; r2++) {
        for (let c2 = c1; c2 < matrix[0].length; c2++) {
          const currentSum =
            (prefix[r2]?.[c2] ?? 0) -
            (prefix[r2]?.[c1 - 1] ?? 0) -
            (prefix[r1 - 1]?.[c2] ?? 0) +
            (prefix[r1 - 1]?.[c1 - 1] ?? 0)
          if (currentSum > max) {
            result = [r1, c1, r2, c2]
            max = currentSum
          }
        }
      }
    }
  }
  return result
}
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
