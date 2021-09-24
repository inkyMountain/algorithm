import {findLengthOfLCIS} from './longestContinuousIncreasingSubsequence'

describe('longestContinuousIncreasingSubsequence', () => {
  it('findLengthOfLCIS0', () => {
    expect(findLengthOfLCIS( [1,3,5,4,7])).toStrictEqual(3)
  })

  it('findLengthOfLCIS1', () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toStrictEqual(1)
  })
})
