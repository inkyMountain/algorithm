/*
 * @lc app=leetcode.cn id=1095 lang=typescript
 *
 * [1095] 山脉数组中查找目标值
 */

class MountainArray {
  array: number[] = []
  constructor(private array: number[]) {}
  get(index: number): number {
    return this.array[index]
  }
  length(): number {
    return this.array.length
  }
}
// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 */

function findInMountainArray(target: number, mountainArr: MountainArray) {
  /**
   * 1 2 4 5  3  1
   * 0 1 2 3  4  5
   *
   * 1 2 1 -2 -2
   * Using binary search to find the index of first negative number,
   * in range [0, array.length - 2].
   * and then do binary search in [0, index] and [index + 1, array.length - 1],
   * in order to find target.
   */
  const length = mountainArr.length()
  let index = length - 1,
    left = 0,
    right = length - 2
  while (left <= right) {
    const mid = (left + right) >> 1
    const delta = mountainArr.get(mid + 1) - mountainArr.get(mid)
    if (delta < 0) {
      index = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  const peakIndex = index
  function binarySearch(left: number, right: number, increasing: boolean) {
    let i
    const leftCopy = left,
      rightCopy = right
    while (left <= right) {
      const mid = (left + right) >> 1
      const midValue = mountainArr.get(mid)
      // peakIndex 左侧为递增数组，右侧为递减数组。它们的二分搜索范围的收缩方法不同，需要进行区分。
      if (increasing) {
        if (midValue >= target) {
          i = mid
          right = mid - 1
        } else {
          left = mid + 1
        }
      } else {
        if (midValue >= target) {
          i = mid
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
    }
    // 最后得到的 index 有可能是第一个大于 target 的 index，所以需要判断是否与 target 相等。
    if (i >= leftCopy && i <= rightCopy && mountainArr.get(i) === target) {
      return i
    }
  }

  const leftResult = binarySearch(0, peakIndex, true)
  if (leftResult !== undefined) {
    return leftResult
  }
  const rightResult = binarySearch(peakIndex + 1, length - 1, false)
  if (rightResult !== undefined) {
    return rightResult
  }
  return -1
}

// @lc code=end

describe('find-in-mountain-array', () => {
  test('1', () => {
    expect(
      findInMountainArray(3, new MountainArray([1, 2, 3, 4, 5, 3, 1]))
    ).toStrictEqual(2)
  })
})
