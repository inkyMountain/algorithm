import {computeArea} from './rectangle-area'
describe('rectangle-area', () => {
  test('1', () => {
    expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).toStrictEqual(45)
  })
  test('2', () => {
    expect(computeArea(-2, -2, 2, 2, 3, 3, 4, 4)).toStrictEqual(17)
  })
})
