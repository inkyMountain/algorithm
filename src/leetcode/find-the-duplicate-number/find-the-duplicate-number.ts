/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  // 不修改原数组
  // space O(1)
  let slow = 0,
    fast = 0
  // [1, 2, 5, 4, 3, 3]
  // 3, 1, 3, 4, 2
  while (fast !== undefined) {
    fast = nums[fast]
    fast = nums[fast]
    slow = nums[slow]
    if (slow === fast) {
      let slow2 = 0
      while (slow !== slow2) {
        slow = nums[slow]
        slow2 = nums[slow2]
      }
      return slow
    }
  }
}
// @lc code=end
