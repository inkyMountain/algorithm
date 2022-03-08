import {subarraysDivByK} from './subarray-sums-divisible-by-k'

describe('subarray-sums-divisible-by-k', () => {
  test('1', () => {
    expect(subarraysDivByK([-1, 2, 9], 2)).toStrictEqual(2)
  })
})
