// https://leetcode-cn.com/problems/house-robber-ii/

export function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  function robRange(start: number, end: number) {
    const dp = [nums[start]]
    dp[1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
      dp[i - start] = Math.max(dp[i - start - 1], dp[i - start - 2] + nums[i])
    }
    return dp[dp.length - 1]
  }

  const skipLast = robRange(0, nums.length - 2)
  const skipFirst = robRange(1, nums.length - 1)
  // the houses is circular. we can skip the first or the last one, to make the houses as straight.
  // this is because if we skip first or last, we can steal more freely, 
  // without worrying about the first's house when we steal the last.
  return Math.max(skipLast, skipFirst)
}
