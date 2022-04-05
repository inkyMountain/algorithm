/*
 * @lc app=leetcode.cn id=1124 lang=typescript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * 首先将 hours 数组转化为只有 1 和 -1 的数组，这是因为具体的数字对于结果并没有影响，
 * 比如 9 或 10 的效果是一样的。
 * 然后对转化后的数组计算前缀和，记为 prefixSum，prefixSum 的长度需要是 hours.length + 1。
 * 这是因为首位数字的和需要是前缀和[1] - 前缀和[0]。
 * 接着使用一个栈，将 prefixSum 数字的第一个元素推入栈中，并遍历后续的元素，
 * 当其小于栈顶元素时，才将其推入栈中。
 * 这是因为从第二个元素开始，只有当其小于栈顶元素，才有可能产生新的更大的范围。
 * 如果其大于等于栈顶元素，那么当其符合要求时，栈顶元素一定符合要求，且产生的范围比它大。
 * 所以这种元素入栈是没有意义的。
 * 之后再度遍历 prefixSum (j)，顺序是从右往左，并和栈顶元素(i)比较大小。
 * 如果 prefixSum[j] > prefixSum[i]，说明 [i + 1, j] 这个范围内的数字总和大于 0，
 * 是表现良好的时间段。这时继续比较 prefixSum[j] 和栈顶元素的大小，直到 prefixSum[j] <= prefixSum[i]。
 * 接下来使用 prefixSum[j - 1] 和栈顶元素继续比较，直到循环完整个 prefixSum 数组。
 */
function longestWPI(hours: number[]): number {
  const prefixSum: number[] = [0]
  let sum = 0
  // 构建前缀和
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) {
      sum += 1
    } else {
      sum -= 1
    }
    prefixSum.push(sum)
  }

  // 构建单调栈 (递减：栈底 -> 栈顶)
  const stack: number[] = [prefixSum[0]]
  for (let i = 1; i < prefixSum.length; i++) {
    if (prefixSum[i] < prefixSum[stack[stack.length - 1]]) {
      stack.push(i)
    }
  }

  let max = 0
  for (let i = prefixSum.length - 1; i > 0; i--) {
    while (prefixSum[i] > prefixSum[stack[stack.length - 1]]) {
      const top = stack.pop()
      max = Math.max(i - top, max)
    }
  }
  return max
}

// @lc code=end

describe('longest-well-performing-interval', () => {
  test('1', () => {
    expect(longestWPI([9, 9, 6, 0, 6, 6, 9, 9, 9, 9])).toStrictEqual(10)
    expect(longestWPI([9, 9, 6, 0, 6, 6, 9])).toStrictEqual(3)
    expect(longestWPI([6, 6, 6])).toStrictEqual(0)
    expect(longestWPI([6, 9, 9])).toStrictEqual(3)
  })
})
