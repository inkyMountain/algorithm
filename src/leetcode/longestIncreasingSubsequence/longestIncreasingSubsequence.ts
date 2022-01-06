// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// this solution can produce lis' index.
export function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1).map((_, index) => {
    return [index]
  })
  let result = [0]
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        const newDpi = [...dp[j], i]
        if (newDpi.length > dp[i].length) {
          dp[i] = newDpi
        }
        if (dp[i].length > result.length) {
          result = dp[i]
        }
      }
    }
  }

  return result.length
}

// this's a better solution than above
// export function lengthOfLIS(nums: number[]): number {
//   const dp = new Array(nums.length).fill(1)
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//   return Math.max(...dp)
// }
