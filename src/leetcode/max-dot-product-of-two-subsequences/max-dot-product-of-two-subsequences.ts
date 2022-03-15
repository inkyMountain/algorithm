// leetcode 1458
export function maxDotProduct(nums1: number[], nums2: number[]): number {
  const length1 = nums1.length
  const length2 = nums2.length
  const dp = new Array(length1).fill(-Infinity).map(() => {
    return new Array(length2).fill(-Infinity)
  })
  dp[0][0] = nums1[0] * nums2[0]
  let previous = dp[0][0]
  // dp的初始化，取nums1的第一个数字，分别和nums2的j长度取最大值。
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
      // 可能的来源是，，或仅一个加入点积
      dp[i][j] = Math.max(
        // ij都加入点积，但不与前面取和。
        product,
        // ij都加入点积，与前面取和。
        dp[i - 1][j - 1] + product,
        // ij仅一个加入点积。
        dp[i - 1][j],
        // ij仅一个加入点积。
        dp[i][j - 1]
      )
    }
  }
  return dp[length1 - 1][length2 - 1]
}
