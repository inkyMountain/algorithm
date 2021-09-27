import {longestCommonSubsequence} from './longestCommonSubsequence'

describe('longestCommonSubsequence', () => {
  it('longestCommonSubsequence0', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toStrictEqual(3)
  })

  it('longestCommonSubsequence1', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toStrictEqual(3)
  })

  it('longestCommonSubsequence2', () => {
    expect(longestCommonSubsequence('abc', 'def')).toStrictEqual(0)
  })
})
