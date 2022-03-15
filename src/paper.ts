/*
 * @lc app=leetcode.cn id=1458 lang=typescript
 *
 * [1458] 两个子序列的最大点积
 */

// @lc code=start
function maxDotProduct(nums1: number[], nums2: number[]): number {
  const length1 = nums1.length
  const length2 = nums2.length
  const dp = new Array(length1).fill(-Infinity).map(() => {
    return new Array(length2).fill(-Infinity)
  })
  dp[0][0] = nums1[0] * nums2[0]
  let previous = dp[0][0]
  for (let j = 1; j < length2; j++) {
    dp[0][j] = Math.max(previous, nums1[0] * nums2[j])
    previous = dp[0][j]
  }
  previous = dp[0][0]
  for (let i = 1; i < length1; i++) {
    dp[i][0] = Math.max(previous, nums1[i] * nums2[0])
    previous = dp[i][0]
  }
  for (let i = 1; i < length1; i++) {
    for (let j = 1; j < length2; j++) {
      const digit1 = nums1[i]
      const digit2 = nums2[j]
      const product = digit1 * digit2
      dp[i][j] = Math.max(
        product,
        dp[i - 1][j - 1] + product,
        dp[i - 1][j],
        dp[i][j - 1]
      )
    }
  }
  return dp[length1 - 1][length2 - 1]
}
// @lc code=end
