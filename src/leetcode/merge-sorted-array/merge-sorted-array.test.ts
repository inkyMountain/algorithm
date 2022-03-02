import {merge} from './merge-sorted-array'

describe('merge', () => {
  test('merge1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    merge(nums1, 3, [2, 5, 6], 3)
    expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6])
  })
  test('merge2', () => {
    const nums1 = [4, 5, 6, 0, 0, 0]
    merge(nums1, 3, [1, 2, 3], 3)
    expect(nums1).toStrictEqual([1, 2, 3, 4, 5, 6])
  })
})
