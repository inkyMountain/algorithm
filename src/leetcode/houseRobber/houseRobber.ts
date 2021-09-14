// https://leetcode-cn.com/problems/house-robber/

export function rob(nums: number[]): number {
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const xxx = dp[i - 1]
    const yyy = (dp[i - 2] || 0) + nums[i]
    dp[i] = Math.max(xxx, yyy)
  }
  return dp[dp.length - 1]
}
