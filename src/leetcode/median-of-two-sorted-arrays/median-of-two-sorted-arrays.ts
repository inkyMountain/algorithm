// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/submissions/

/**
 * 对于两个排序数组，求其中位数。比如[1, 2] [2, 3]，将其整理成一个数组，[1, 2, 2, 3]。
 * 它的中位数就是 (2 + 2) / 2 = 2
 * 问题可以被转化为求两个数组中第k小的数字(问题被普通化了)。
 * 对于两个数组，首先使用双指针，定位在各自的 Math.floor(k / 2) - 1中。
 * 由于这两个数字前最多有 (Math.floor(k / 2) - 1) * 2个数字，这个总数比k小。
 * 设这两个数组为 num1, num2, 其中较小的那个数字，它的前面所有数字都不是我们要的第k个数字，
 * 所以可以安全地将它们剔除。
 * 循环这个过程，直到k===1，或者 k / 2 - 1超出了其中一个数组的长度，
 * 就可以得到需要的
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const length1 = nums1.length
  const length2 = nums2.length
  const k = Math.floor((length1 + length2) / 2)
  if ((length1 + length2) % 2 === 1) {
    return kthOf(nums1, nums2, k + 1)
  } else {
    return (kthOf(nums1, nums2, k) + kthOf(nums1, nums2, k + 1)) / 2
  }
}

function kthOf(nums1: number[], nums2: number[], k): number {
  let left1 = 0,
    left2 = 0
  const length1 = nums1.length
  const length2 = nums2.length
  while (k > 1) {
    if (left1 > length1 - 1) {
      return nums2[left2 + k - 1]
    } else if (left2 > length2 - 1) {
      return nums1[left1 + k - 1]
    }
    const index = Math.floor(k / 2) - 1
    const pivot1Index = Math.min(index + left1, length1 - 1)
    const pivot2Index = Math.min(index + left2, length2 - 1)
    const pivot1 = nums1[pivot1Index]
    const pivot2 = nums2[pivot2Index]
    if (pivot1 <= pivot2) {
      k -= pivot1Index - left1 + 1
      left1 = pivot1Index + 1
    } else {
      k -= pivot2Index - left2 + 1
      left2 = pivot2Index + 1
    }
  }
  return Math.min(nums1[left1] ?? Infinity, nums2[left2] ?? Infinity)
}
