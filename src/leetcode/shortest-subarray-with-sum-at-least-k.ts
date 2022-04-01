/*
 * @lc app=leetcode.cn id=862 lang=typescript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
function shortestSubarray(nums: number[], k: number): number {
  let min = Infinity

  const prefixes: number[] = []
  prefixes[-1] = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    prefixes[i] = sum
    if (nums[i] >= k) {
      return 1
    }
  }

  const queue: number[] = []
  // 2, -1, 2
  let queueIndex = 0
  for (let i = -1; i < prefixes.length; i++) {
    const prefix = prefixes[i]
    while (queue.length > 0 && prefix < prefixes[queue[queue.length - 1]]) {
      queue.pop()
    }
    while (queue.length > 0 && prefix - prefixes[queue[queueIndex]] >= k) {
      min = Math.min(min, i - queue[queueIndex])
      queueIndex++
    }
    queue.push(i)
  }
  return min === Infinity ? -1 : min
}
// @lc code=end

describe('shortest-subarray-with-sum-at-least-k', () => {
  test('1', () => {
    expect(shortestSubarray([2, -1, 2], 3)).toStrictEqual(3)
  })
})
