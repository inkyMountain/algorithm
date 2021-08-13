// https://leetcode-cn.com/problems/partition-equal-subset-sum/

export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((sum, num) => sum + num, 0)
  const target = sum / 2
  // cut branch
  // this can drastically reduce the running time consumption.
  if (sum % 2 === 1) {
    return false
  }
  const dp = new Array(Math.ceil(target) + 1).fill(0).map(() => -Infinity)
  dp[0] = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
    if (dp[nums.length - 1] === target) {
      return true
    }
  }

  return target === dp[target]
}
