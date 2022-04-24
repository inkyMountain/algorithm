/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * 1 1 0 1 1 1
 * 0 1 1 0 1 1 1
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0, consecutiveNumber = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      consecutiveNumber++
      max = Math.max(max, consecutiveNumber)
    } else {
      consecutiveNumber = 0
    }
  }
  return max
};
// @lc code=end

