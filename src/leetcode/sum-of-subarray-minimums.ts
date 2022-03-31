/*
 * @lc app=leetcode.cn id=907 lang=typescript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
function sumSubarrayMins(arr: number[]): number {
  const stack: number[] = []
  let sum = 0
  for (let i = -1; i <= arr.length; i++) {
    const num = getNthElementOf(arr, i)
    while (
      stack.length > 1 &&
      num <= getNthElementOf(arr, stack[stack.length - 1])
    ) {
      const top = stack.pop()
      const topValue = getNthElementOf(arr, top)
      const left = stack[stack.length - 1] + 1
      const right = i - 1
      sum = sum + topValue * (top - left + 1) * (right - top + 1)
    }
    stack.push(i)
  }
  return sum % (Math.pow(10, 9) + 7)
}

function getNthElementOf(array: number[], n: number): number {
  if (n === -1 || n === array.length) {
    return -Infinity
  }
  return array[n]
}
// @lc code=end

describe('sum-of-subarray-minimums', () => {
  test('1', () => {
    expect(sumSubarrayMins([3, 1, 2, 4])).toStrictEqual(17)
  })
})
