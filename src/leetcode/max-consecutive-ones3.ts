/*
 * @lc app=leetcode.cn id=1004 lang=typescript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
function longestOnes(nums: number[], k: number): number {
  // left border of window
  let left = 0,
    // one amount of current window range
    oneNumber = 0,
    // zero amount of current window range
    zeroNumber = 0,
    max = 0

  for (let right = 0; right < nums.length; right++) {
    // window expansion
    const num = nums[right]
    if (num === 0) {
      zeroNumber++
    } else {
      oneNumber++
    }

    // produce the result. maintain the longest length the window ever had.
    if (zeroNumber <= k) {
      max = Math.max(max, right - left + 1)
    }

    // window contraction
    while (zeroNumber > k) {
      const leftNum = nums[left]
      if (leftNum === 0) {
        zeroNumber--
      } else {
        oneNumber--
      }
      left++
    }
  }

  return max
}
// @lc code=end

console.log(
  // should be 2
  longestOnes([1, 1], 2),
  // should be 5
  longestOnes([1, 1, 0, 0, 1], 2),
  // should be 7
  longestOnes([1, 1, 0, 0, 1, 1, 1, 0, 1], 2)
)
