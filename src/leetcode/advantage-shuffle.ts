/*
 * @lc app=leetcode.cn id=870 lang=typescript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * 将两个数组排序后，从小到大进行比较。
 * 若a中数字**大**于b，则记录此时a b的对应关系。
 * 若a中数字**小**于b，则放入一个统一的数组中。
 * 然后遍历b，根据此前建立的对应关系，将a中的数字重新排列。
 */
function advantageCount(nums1: number[], nums2: number[]): number[] {
  /**
   * [2, 3, 4, 5]
   * [1, 3, 5, 9]
   *
   * Beated
   * 1: [2]
   * 3: [4]
   * CannotBeated
   * 3, 5
   *
   *  2  4  3  5
   * [1, 3, 9, 5]
   */
  const sortedNums1 = [...nums1].sort((a, b) => a - b)
  const sortedNums2 = [...nums2].sort((a, b) => a - b)
  const beated: Record<number, Array<number>> = {}
  const cannotBeat = []

  let index1 = 0,
    index2 = 0
  while (index1 < sortedNums1.length) {
    if (sortedNums1[index1] > sortedNums2[index2]) {
      beated[sortedNums2[index2]] = beated[sortedNums2[index2]] || []
      beated[sortedNums2[index2]].push(sortedNums1[index1])
      index1++
      index2++
    } else {
      cannotBeat.push(sortedNums1[index1])
      index1++
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (beated[nums2[i]]?.length > 0) {
      nums1[i] = beated[nums2[i]].shift()
    } else {
      nums1[i] = cannotBeat.shift()
    }
  }
  return nums1
}
// @lc code=end

test('advantage-shuffle', () => {
  expect(advantageCount([5, 2, 3, 4], [1, 3, 9, 5])).toStrictEqual([2, 4, 3, 5])
  expect(advantageCount([2, 7, 11, 15], [1, 10, 4, 11])).toStrictEqual([
    2, 11, 7, 15,
  ])
})
