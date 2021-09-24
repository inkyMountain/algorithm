import {lengthOfLIS} from './longestIncreasingSubsequence'

describe('longestIncreasingSubsequence', () => {
  it('longestIncreasingSubsequence0', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toStrictEqual(4)
  })

  it('longestIncreasingSubsequence1', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toStrictEqual(4)
  })

  it('longestIncreasingSubsequence2', () => {
    expect(lengthOfLIS([2, 2, 2, 2, 2])).toStrictEqual(1)
  })
})
