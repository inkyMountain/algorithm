import {moveZeroes} from './move-zeroes'

describe('move-zeroes', () => {
  test('move-zeros', () => {
    const array = [1, 0, 0, 2, 3, 0]
    moveZeroes(array)
    expect(array).toStrictEqual([1, 2, 3, 0, 0, 0])
  })
})
