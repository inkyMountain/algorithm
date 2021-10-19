import {wiggleMaxLength} from './wiggleSubsequence'

describe('wiggleMaxLength', () => {
  it('wiggleMaxLength0', () => {
    expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toStrictEqual(6)
  })

  it('wiggleMaxLength1', () => {
    expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toStrictEqual(
      7
    )
  })

  it('wiggleMaxLength2', () => {
    expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual(2)
  })

  it('wiggleMaxLength3', () => {
    expect(wiggleMaxLength([0, 0])).toStrictEqual(1)
  })
})
