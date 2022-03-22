/*
 * @lc app=leetcode.cn id=775 lang=typescript
 *
 * [775] 全局倒置与局部倒置
 */

// @lc code=start
/**
 * 从左到右遍历数组，当前数字相对于上一个数字，只有上升和下降两种情况(因为没有重复数字)。
 * 设当前数字的索引是i，
 * condition 1: 如果nums[i] < nums[i - 1]，那么 i 和 i - 1 必定构成局部倒置。
 * 由于局部倒置一定构成全局倒置，要想 i 只与 i - 1 构成全局倒置，
 * nums[i] 必须大于 [0, i - 2]范围内的最大值，否则答案为false。
 * 
 * condition 2: nums[i] > nums[i - 1], i 与 i - 1 无法构成局部倒置，
 * 但有可能构成全局倒置。所以必须确保 nums[i] 大于 [0, i - 2]范围内的最大值，否则答案为false。
 * 
 * 根据上述讨论，一旦出现了意外构成全局倒置的情况，就将 flag 赋值为 false。
 */
function isIdealPermutation(nums: number[]): boolean {
  let max = -Infinity,
    result = true
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] < 0 && nums[i] < max) {
      result = false
    }
    if (nums[i] - nums[i - 1] > 0 && nums[i] < max) {
      result = false
    }
    max = Math.max(max, nums[i - 1])
  }
  return result
}
// @lc code=end

describe('global-and-local-inversions', () => {
  test('isIdealPermutation', () => {
    expect(isIdealPermutation([1, 3, 0, 2])).toBeFalsy()
    expect(isIdealPermutation([1, 2, 0])).toBeFalsy()
    expect(isIdealPermutation([0, 1, 2])).toBeTruthy()
    expect(isIdealPermutation([0, 2, 1])).toBeTruthy()
    expect(isIdealPermutation([1, 0, 2])).toBeTruthy()
    expect(isIdealPermutation([2, 0, 1])).toBeFalsy()
  })
})
