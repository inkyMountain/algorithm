// https://leetcode-cn.com/problems/wiggle-subsequence/

// time: O(n) space: O(n)
// export function wiggleMaxLength(nums: number[]): number {
//   const up = [1]
//   const down = [1]
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i - 1]) {
//       up[i] = Math.max(up[i - 1], down[i - 1] + 1)
//       down[i] = down[i - 1]
//     } else if(nums[i] === nums[i - 1]) {
//       up[i] = up[i - 1]
//       down[i] = down[i - 1]
//     } else {
//       up[i] = up[i - 1]
//       down[i] = Math.max(up[i - 1] + 1, down[i - 1])
//     }
//   }

//   return Math.max(down[nums.length - 1], up[nums.length - 1])
// };

// time: O(n) space: O(1)
export function wiggleMaxLength(nums: number[]): number {
  let up = 1
  let down = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = Math.max(up, down + 1)
    } else if (nums[i] === nums[i - 1]) {
    } else {
      down = Math.max(up + 1, down)
    }
  }

  return Math.max(down, up)
}
