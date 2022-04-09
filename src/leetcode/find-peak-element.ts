/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * 1 2 3 5 2 1
 *      l/m r
 * left 0
 * right 3
 */
function findPeakElement(nums: number[]): number {
  if (nums.length === 1) {
    return 0
  }
  const length = nums.length
  let left = 0, right = length - 2, index = length - 1
  while (left <= right) {
    const mid = (left + right) >> 1
    const delta = nums[mid + 1] - nums[mid]
    // because nums[mid + 1] is definitly different with nums[mid],
    // it's no need to consider the condition that delta equals to 0.
    if (delta < 0) {
      index = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return index
};
// @lc code=end

