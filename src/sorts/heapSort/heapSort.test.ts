import {sortArray} from './heapSort'

describe('heapSort', () => {
  test('heapSort1', () => {
    expect(sortArray([1, 2, 3])).toStrictEqual([1, 2, 3])
  })
  test('heapSort2', () => {
    expect(sortArray([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5])
  })
  test('heapSort3', () => {
    expect(sortArray([5, 1, 1, 2, 0, 0])).toStrictEqual([0, 0, 1, 1, 2, 5])
  })
  test('heapSort4', () => {
    expect(sortArray([-4, 0, 7, 4, 9, -5, -1, 0, -7, -1])).toStrictEqual([
      -7, -5, -4, -1, -1, 0, 0, 4, 7, 9,
    ])
  })
})
