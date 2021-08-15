function findTargetSumWays(nums: number[], target: number): number {
  const dp = []
  const sum = nums.reduce((accumulation, weight) => weight + accumulation)
  // the bag's capacity
  const capacity = (sum + target) / 2
  if ((sum + target) % 2 === 1) {
    return 0
  }
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = capacity; j >= nums[i]; j--) {
      const way1 = dp[j - nums[i]] ?? 0
      const way2 = dp[j] ?? 0
      dp[j] = way1 + way2
    }
  }
  return dp[dp.length - 1]
}

export {findTargetSumWays}
