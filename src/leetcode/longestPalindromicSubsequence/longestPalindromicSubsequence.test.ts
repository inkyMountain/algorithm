import {longestPalindromeSubseq} from './longestPalindromicSubsequence'

describe('longestPalindromicSubsequence', () => {
  it('longestPalindromeSubseq0', () => {
    expect(longestPalindromeSubseq('bbbab')).toStrictEqual(4)
  })

  it('longestPalindromeSubseq1', () => {
    expect(longestPalindromeSubseq('cbbd')).toStrictEqual(2)
  })
})
