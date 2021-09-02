import {coinChange} from './coinChange'

test('change0', () => {
  expect(coinChange([1, 2, 5], 11)).toStrictEqual(3)
})

test('change1', () => {
  expect(coinChange([2], 3)).toStrictEqual(-1)
})

test('change2', () => {
  expect(coinChange([1], 0)).toStrictEqual(0)
})

test('change3', () => {
  expect(coinChange([1], 1)).toStrictEqual(1)
})

test('change4', () => {
  expect(coinChange([1], 2)).toStrictEqual(2)
})
