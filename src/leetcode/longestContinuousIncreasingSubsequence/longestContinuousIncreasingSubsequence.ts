// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

export function findLengthOfLCIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
    }
  }
  return Math.max(...dp)
}
