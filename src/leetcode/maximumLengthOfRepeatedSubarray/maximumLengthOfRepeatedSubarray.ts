// https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
// export function findLength(nums1: number[], nums2: number[]): number {
//   const n = nums1.length,
//     m = nums2.length
//   let max = 0
//   const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = m - 1; j >= 0; j--) {
//       const xxx = dp[i + 1][j + 1]
//       dp[i][j] = nums1[i] === nums2[j] ? xxx + 1 : 0
//       max = Math.max(max, dp[i][j])
//     }
//   }
//   return max
// }

export function findLength(nums1: number[], nums2: number[]): number {
  const n = nums1.length,
    m = nums2.length
  let max = 0
  const dp = new Array(m).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    let previous = 0, current = 0
    for (let j = m - 1; j >= 0; j--) {
      current = previous
      previous = dp[j]
      dp[j] = nums1[i] === nums2[j] ? current + 1 : 0
      max = Math.max(max, dp[j])
    }
  }
  return max
}
