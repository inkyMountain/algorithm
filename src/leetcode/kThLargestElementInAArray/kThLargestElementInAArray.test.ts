import {findKthLargest} from './kThLargestElementInAArray'

describe('findKthLargest', () => {
  it('findKthLargest1', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toStrictEqual(5)
  })
  it('findKthLargest2', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toStrictEqual(4)
  })

  it('findKthLargest3', () => {
    expect(findKthLargest([2, 1], 2)).toStrictEqual(1)
  })
})
