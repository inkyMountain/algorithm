import {numDistinct} from './distinctSubsequences'

describe('numDistinct', () => {
  it('numDistinct0', () => {
    expect(numDistinct('rabbbit', 'rabbit')).toStrictEqual(3)
  })

  it('numDistinct1', () => {
    expect(numDistinct('babgbag', 'bag')).toStrictEqual(5)
  })
})
