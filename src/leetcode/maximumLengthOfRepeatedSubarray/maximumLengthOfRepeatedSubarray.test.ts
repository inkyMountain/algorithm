import {findLength} from './maximumLengthOfRepeatedSubarray'

describe('findLength', () => {
  it('findLength0', () => {
    expect(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toStrictEqual(3)
  })

  it('findLength1', () => {
    expect(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0])).toStrictEqual(5)
  })
})
