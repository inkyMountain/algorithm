import {maxSubArray} from './maximumSubArray'

describe('maxSubArray', () => {
  it('maxSubArray0', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6)
  })

  it('maxSubArray1', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toStrictEqual(23)
  })

  it('maxSubArray2', () => {
    expect(maxSubArray([1])).toStrictEqual(1)
  })
})
