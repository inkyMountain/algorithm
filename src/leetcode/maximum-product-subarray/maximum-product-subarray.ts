// https://leetcode-cn.com/problems/maximum-product-subarray/
/**
 * Problem:
 * 给定一个数组，元素为整数。找出乘积最大的连续子数组，返回最大乘积值。
 * input: [2,3,-2,4]
 * output: 6, 因为 2 * 3 = 6
 * 
 * Answer:
 * 因为0乘以任何数都是0，所以可以将问题分割成，被0拆分的子数组，
 * 求出子数组的最大乘积子数组，返回其中最大的值。
 * 如果子数组中的负数总数为偶数个，那么所有数字的乘积，就是最大值。
 * 如果子数组中的负数总数为奇数个，那么必然有一个奇数不在连续数组中，
 * 且这个奇数一定是最左侧或者最右侧的奇数。
 * 综上，无论是哪一种情况，只要分别向左和向右遍历一遍，遍历过程中，
 * 保存将遍历过的所有数字的乘积，如果比当前的最大值大，则替换。
 * 
 * 有一个边界情况就是，所有子数组的乘积都是负数，那么遍历完成后，当前的最大值肯定是负数。
 * - 如果数组中有0，那么最大值是0。e.g. [-1, 0, -2]
 * - 如果数组中没有0，那么最大值是最大的那个负数。[-1, -2]
 */

function maxProduct(nums: number[]): number {
  let max = nums[0]
  let product = 1
  let hasZero = false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      product = 1
      hasZero = true
      continue
    }
    product = product * nums[i]
    max = Math.max(product, max)
  }

  product = 1

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      product = 1
      hasZero = true
      continue
    }
    product = product * nums[i]
    max = Math.max(product, max)
  }

  return hasZero ? Math.max(max, 0) : max
}
