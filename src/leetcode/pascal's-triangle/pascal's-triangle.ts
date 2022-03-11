/**
 * leetcode 119
 * 杨辉三角的第rowIndex行的每一项，可以直接通过递推公式求出。
 * 第m行第n列与第m行第n-1列的公式：
 * C上n下m = C上n-1下m * (m - n + 1) / n
 */
function getRow(rowIndex: number): number[] {
  const result = [1]
  for (let i = 1; i <= rowIndex; i++) {
    const tail = result[result.length - 1]
    const m = rowIndex,
      n = i
    result[i] = (tail * (m - n + 1)) / n
  }
  return result
}
