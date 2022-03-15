import {spiralOrder} from './spiral-matrix'
describe('spiral-matrix', () => {
  test('1', () => {
    expect(
      spiralOrder([
        [2, 5, 8],
        [4, 0, -1],
      ])
    ).toStrictEqual([2, 5, 8, -1, 0, 4])

    expect(spiralOrder([[2], [4]])).toStrictEqual([2, 4])
  })
})
