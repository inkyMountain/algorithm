/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  const stack = []
  const rightFirstSmallerMap: Record<number, number> = {}
  const leftFirstSmallerMap: Record<number, number> = {}

  // 构建一个从栈底从栈顶，数字从小到大的单调栈。
  for (let i = 0; i < heights.length; i++) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop()
      rightFirstSmallerMap[top] = i
    }
    stack.push(i)
  }

  stack.length = 0
  // 构建一个从栈底从栈顶，数字从大到小的单调栈。
  for (let i = heights.length - 1; i >= 0; i--) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop()
      leftFirstSmallerMap[top] = i
    }
    stack.push(i)
  }

  let result = 0
  for (let i = 0; i < heights.length; i++) {
    const right = (rightFirstSmallerMap[i] ?? heights.length) - 1
    const left = (leftFirstSmallerMap[i] ?? -1) + 1
    result = Math.max((right - left + 1) * heights[i], result)
  }
  return result
}
// 暴力解法，O(n^2)
// function largestRectangleArea(heights: number[]): number {
//   let result = -Infinity
//   for (let i = 0; i < heights.length; i++) {
//     let left = i,
//       right = i
//     while (heights[left - 1] >= heights[i]) {
//       left--
//     }
//     while (heights[right + 1] >= heights[i]) {
//       right++
//     }
//     const square = (right - left + 1) * heights[i]
//     result = Math.max(square, result)
//   }
//   return result
// }
// @lc code=end

describe('largest rectangle in histogram', () => {
  test('1', () => {
    expect(largestRectangleArea([1, 2, 1])).toStrictEqual(3)
    expect(largestRectangleArea([2, 1, 5, 6, 2])).toStrictEqual(10)
  })
})
