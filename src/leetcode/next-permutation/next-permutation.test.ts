import {nextPermutation} from './next-permutation'

describe('next-permutation', () => {
  test('1', () => {
    const nums = [1, 3, 2]
    nextPermutation(nums)
    expect(nums).toStrictEqual([2, 1, 3])
  })
})
