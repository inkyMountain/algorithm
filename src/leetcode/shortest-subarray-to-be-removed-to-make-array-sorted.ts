/*
 * @lc app=leetcode.cn id=1574 lang=typescript
 *
 * [1574]
 */

// @lc code=start
function findLengthOfShortestSubarray(arr: number[]): number {
  if (arr.length === 1) {
    return 0
  }
  let left = 0,
    right = arr.length - 1
  /**
   * 从左开始找到最长的上升序列，从右开始找到最长的下降序列。
   * left为左序列的右边界，right为右序列的左边界。
   * 如果 left 为 0 则返回 right - 1。
   * 如果 left 指向最后一位数字，则整个数组都是非下降序列。不需要删除子数组。
   *
   * 将left缩小至第一个满足arr[left]小于等于arr[right]的地方，
   * 记录此时的 right - left，然后将left复原。
   * 将right放大至第一个满足arr[left]小于等于arr[right]的地方，
   * 记录此时的 right - left，然后将right复原。
   * 返回两个 right - left 中较小的那个。
   */
  while (arr[left + 1] >= arr[left]) {
    left++
  }
  while (arr[right - 1] <= arr[right]) {
    right--
  }
  // 左侧没有非下降序列
  if (left === 0) {
    return arr[right] >= arr[left] ? lengthBetween(left, right) : right
  }
  // 整个数组都是非下降序列
  if (left === arr.length - 1) {
    return 0
  }

  let length = Infinity

  for (let i = left; i >= 0; i--) {
    for (let j = right; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        length = Math.min(length, lengthBetween(i, j))
        break
      } else if (j === arr.length - 1) {
        length = Math.min(length, arr.length - left - 1)
      }
    }
  }
  length = Math.min(length, right)
  return length
}

function lengthBetween(start: number, end: number) {
  return Math.abs(end - start) - 1
}

// @lc code=end

test('shortest-subarray-to-be-removed-to-make-array-sorted', () => {
  expect(findLengthOfShortestSubarray([1, 2, 3, 4, 5])).toStrictEqual(0)
  expect(findLengthOfShortestSubarray([1, 2, 5, 2, 3])).toStrictEqual(1)
  expect(findLengthOfShortestSubarray([1, 2, 5, 2, 1])).toStrictEqual(2)
  expect(
    findLengthOfShortestSubarray([
      58, 68, 54, 45, 52, 21, 33, 35, 54, 22, 58, 13, 67, 31, 25, 66, 27, 75,
      57, 81, 30, 44, 22, 45, 34, 21, 8, 11, 82, 60, 37, 35, 3, 44, 31, 80, 40,
      74, 1, 2, 47,
    ])
  ).toStrictEqual(38)
})
