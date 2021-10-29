/**
 * keypoint:
 * 1. dp[i] means a contiguous numbers which ends at i.
 * 2. the transition formula comes from
 *  - current number
 *  - or the previous max sub array plus current number
 *
 *  optimizations:
 *  dp array can be replaced with a number, cause transition formula relies
 *  only on previous status.
 */
export function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }
  return Math.max(...dp)
}
