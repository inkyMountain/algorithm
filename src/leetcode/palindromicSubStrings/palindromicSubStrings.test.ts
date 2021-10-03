import {countSubstrings} from './palindromicSubStrings'

describe('countSubstrings', () => {
  it('countSubstrings0', () => {
    expect(countSubstrings('abc')).toStrictEqual(3)
  })

  it('countSubstrings1', () => {
    expect(countSubstrings('aaa')).toStrictEqual(6)
  })
})
