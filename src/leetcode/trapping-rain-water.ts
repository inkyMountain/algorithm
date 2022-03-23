/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */
// @lc code=start
/**
 * 索引为i的柱子能接的水 = Math.min([0, i - 1]中的最大值, [i, length - 1]中的最大值)
 *
 * dp做法：
 * 设 leftDp[i] 为 [0, i] 的最大值，
 * 设 rightDp[i] 为 [i, length - 1] 的最大值
 * 分别从左到右，从右到左预处理出dp数组。
 * 然后从左到右遍历数组，
 * 索引为i的柱子接水量 = Math.min(leftDp[i], rightDp[i]) - height[i]
 *
 * 双指针做法：
 * 设 i 为从左到右移动的指针，j 为从右到左移动的指针，
 * iLeftMax 为 [0, i] 的最大值，iRightMax为 [i, length - 1] 的最大值。
 * jLeftMax 和 jRightMax 同理。i j 移动时计算 i 柱和 j 柱的接水量，直到相遇为止。
 * 因为 j 始终在 i 的右边，故 jLeftMax >= iLeftMax，
 * 若有 iLeftMax >= jRightMax，则 jLeftMax >= jRightMax。
 * 此时 j 接水量
 * = Math.min(jLeftMax, jRightMax) - height[j]
 * = jRightMax - height[j]
 *
 * 因为 j 始终在 i 的右边，故又有 iRightMax >= jRightMax，
 * 若有 jRightMax >= iLeftMax，则 iRightMax >= iLeftMax。
 * 此时 i 接水量
 * = Math.min(iLeftMax, iRightMax) - height[i]
 * = iLeftMax - height[i]
 * 
 * 单调栈做法：
 * 以 [3, 2, 1, 4] 为例，从左往右遍历该数组，并维护一个数字索引的单调栈。
 * 以 1 和 4 为例，4 第一个比 1 大的数字，
 * 由于栈是单调的，1 下面的那个数字(将它称为previous)一定大于 1，
 * 所以这三个数字的大小变化一定是 高-低-高，所以一定能形成一个接雨水的凹槽。
 * 那么这个凹槽的面积
 * = 宽度 * 高度
 * = (4的索引 - 2的索引 - 1) * (4和 previous 高度的较小值 - 1的高度)
 * = (3 - 1 - 1) *  (Math.min(height[previous], height[3]) - height[2])
 */
function trap(height: number[]): number {
  let ans = 0
  const stack = []
  const n = height.length
  for (let i = 0; i < n; ++i) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (!stack.length) {
        break
      }
      const left = stack[stack.length - 1]
      const currWidth = i - left - 1
      const currHeight = Math.min(height[left], height[i]) - height[top]
      ans += currWidth * currHeight
    }
    stack.push(i)
  }
  return ans
}

// @lc code=end

describe('trap', () => {
  test('1', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toStrictEqual(6)
  })
})
