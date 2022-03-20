/*
 * @lc app=leetcode.cn id=1438 lang=typescript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
function longestSubarray(nums: number[], limit: number): number {
  let result = 1

  const queMax = [nums[0]],
    queMin = [nums[0]]
  let left = 0,
    right = 1,
    queMaxStartIndex = 0,
    queMinStartIndex = 0

  outer: while (true) {
    if (right === nums.length) {
      break outer
    }
    innerRight: while (
      right < nums.length &&
      queMax[queMaxStartIndex] - queMin[queMinStartIndex] <= limit
    ) {
      while (queMax.length > queMaxStartIndex && queMax[queMax.length - 1] < nums[right]) {
        queMax.pop()
      }
      while (queMin.length > queMinStartIndex && queMin[queMin.length - 1] > nums[right]) {
        queMin.pop()
      }
      queMax.push(nums[right])
      queMin.push(nums[right])
      if (queMax[queMaxStartIndex] - queMin[queMinStartIndex] <= limit) {
        result = Math.max(right - left + 1, result)
      }
      right++
    }

    innerLeft: while (
      left <= right &&
      queMax[queMaxStartIndex] - queMin[queMinStartIndex] > limit
    ) {
      if (nums[left] === queMin[queMinStartIndex]) {
        // queMin.shift()
        queMinStartIndex++
      }
      if (nums[left] === queMax[queMaxStartIndex]) {
        // queMax.shift()
        queMaxStartIndex++
      }
      left++
    }
  }

  return result
}
// @lc code=end

describe('longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit', () => {
  test('1', () => {
    expect(longestSubarray([10, 1, 2, 4, 7, 2], 5)).toStrictEqual(4)
  })
  test('2', () => {
    expect(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)).toStrictEqual(3)
  })
  test('3', () => {
    const x = [
      24, 12, 71, 33, 5, 87, 10, 11, 3, 58, 2, 97, 97, 36, 32, 35, 15, 80, 24,
      45, 38, 9, 22, 21, 33, 68, 22, 85, 35, 83, 92, 38, 59, 90, 42, 64, 61, 15,
      4, 40, 50, 44, 54, 25, 34, 14, 33, 94, 66, 27, 78, 56, 3, 29, 3, 51, 19,
      5, 93, 21, 58, 91, 65, 87, 55, 70, 29, 81, 89, 67, 58, 29, 68, 84, 4, 51,
      87, 74, 42, 85, 81, 55, 8, 95, 39,
    ]
    expect(longestSubarray(x, 87)).toStrictEqual(3)
  })
  // test('4', () => {
  //   const x = new Array(99996).fill(1)
  //   x.push(11,12,12,12)
  //   expect(longestSubarray(x, 10)).toStrictEqual(99997)
  // })
})

// const dp = new Array(nums.length).fill(0)
//   dp[0] = {
//     max: nums[0],
//     min: nums[0],
//     length: 1,
//   }
//   let result = dp[0].length

//   for (let i = 1; i < nums.length; i++) {
//     const current = nums[i]
//     let {max, min, length} = dp[i - 1]
//     if (current > max) {
//       max = current
//     } else if (current < min) {
//       min = current
//     }
//     if (max - min > limit) {
//       dp[i] = {
//         max: current,
//         min: current,
//         length: 1,
//       }
//     } else {
//       dp[i] = {
//         max,
//         min,
//         length: length + 1,
//       }
//     }
//     result = Math.max(result, dp[i].length)
//   }
//   return result

// if (nums.length === 1) {
//   return 1
// }
// let result = 1
// const windowNums = [nums[0]]
// let left = 0,
//   right = 0
// outer: while (true) {
//   inter: while (right < nums.length) {
//     right++
//     if (right >= nums.length) {
//       break outer
//     }
//   }
// }

// return result
