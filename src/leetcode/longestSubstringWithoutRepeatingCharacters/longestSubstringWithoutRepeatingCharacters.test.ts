import {lengthOfLongestSubstring} from './longestSubstringWithoutRepeatingCharacters'

describe('lengthOfLongestSubstring', () => {
  it('lengthOfLongestSubstring0', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3)
  })
  it('lengthOfLongestSubstring1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1)
  })
  it('lengthOfLongestSubstring2', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3)
  })
})
