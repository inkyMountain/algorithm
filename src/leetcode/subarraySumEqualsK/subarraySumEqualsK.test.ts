import {subarraySum} from './subarraySumEqualsK'

describe('subarraySum', () => {
  it('subarraySum0', () => {
    expect(subarraySum([1, 1, 1], 2)).toStrictEqual(2)
  })
  it('subarraySum1', () => {
    expect(subarraySum([1, 2, 3], 3)).toStrictEqual(2)
  })
})
