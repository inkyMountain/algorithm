import {mergeSort} from './paper'

describe('mergeSort', () => {
  test('test1', () => {
    expect(mergeSort([1, 4, 8, 2])).toStrictEqual([1, 2, 4, 8])
    expect(mergeSort([1, 4, 8, 2, 10])).toStrictEqual([1, 2, 4, 8, 10])
    expect(mergeSort([1])).toStrictEqual([1])
    expect(mergeSort([2, 1])).toStrictEqual([1, 2])
    expect(mergeSort([4, 1, 8, 2])).toStrictEqual([1, 2, 4, 8])
    expect(mergeSort([2, 1, 3])).toStrictEqual([1, 2, 3])
    expect(mergeSort([12, 423, 10086, 3, 43])).toStrictEqual([
      3, 12, 43, 423, 10086,
    ])
  })
})
