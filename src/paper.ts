/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1 = m - 1,
    index2 = n - 1,
    target = m + n - 1
  while (index1 >= 0 && index2 >= 0) {
    const number1 = nums1[index1]
    const number2 = nums2[index2]
    if (number1 > number2) {
      nums1[target] = number1
      index1--
    } else {
      nums1[target] = number2
      index2--
    }
    target--
  }
  if (index1 < 0) {
    for (let i = index2; i >= 0; i--) {
      nums1[target] = nums2[i]
      target--
    }
  }
}
// @lc code=end
