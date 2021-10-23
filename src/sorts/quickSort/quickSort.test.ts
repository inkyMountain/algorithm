import {sort} from './quickSort'

describe('sort', () => {
  it('quickSort1', () => {
    expect(sort([2, 1, 3])).toStrictEqual([1, 2, 3])
  })
  it('quickSort2', () => {
    expect(sort([12, 423, 10086, 3, 43])).toStrictEqual([3, 12, 43, 423, 10086])
  })
  it('quickSort3', () => {
    expect(sort([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5])
  })
  it('quickSort3', () => {
    expect(sort([0])).toStrictEqual([0])
  })
})
