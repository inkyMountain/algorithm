// https://leetcode-cn.com/problems/combination-sum-iv/

export function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let j = 0; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j >= nums[i]) {
        dp[j] = dp[j] ?? 0
        dp[j] += dp[j - nums[i]] ?? 0
      }
    }
  }
  return dp[dp.length - 1]
}
