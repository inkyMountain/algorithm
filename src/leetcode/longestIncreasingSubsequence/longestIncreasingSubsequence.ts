// https://leetcode-cn.com/problems/longest-increasing-subsequence/

export function lengthOfLIS(nums: number[]): number {
  const d = []
  const subsequence = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (d.length === 0) {
      d.push(num)
      continue
    }
    if (num > d[d.length - 1]) {
      d.push(num)
      subsequence.push(num)
    } else if (num < d[d.length - 1]) {
      let left = 0,
        right = d.length - 1,
        index = d.length
      while (left <= right) {
        const mid = (left + right) >> 1
        if (d[mid] >= num) {
          index = mid
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      if (index >= 0 && index < d.length) {
        d[index] = num
      }
    }
  }
  return d.length
}

// this solution can produce lis' index.
// export function lengthOfLIS(nums: number[]): number {
//   const dp = new Array(nums.length).fill(1).map((_, index) => {
//     return [index]
//   })
//   let result = [0]
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         const newDpi = [...dp[j], i]
//         if (newDpi.length > dp[i].length) {
//           dp[i] = newDpi
//         }
//         if (dp[i].length > result.length) {
//           result = dp[i]
//         }
//       }
//     }
//   }

//   return result.length
// }

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
