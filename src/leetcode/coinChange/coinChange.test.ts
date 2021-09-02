import {change} from './coinChange'

test('change0', () => {
  expect(change([1, 2, 5], 11)).toStrictEqual(3)
})

test('change1', () => {
  expect(change([2], 3)).toStrictEqual(-1)
})

test('change2', () => {
  expect(change([1], 0)).toStrictEqual(0)
})

test('change3', () => {
  expect(change([1], 1)).toStrictEqual(1)
})

test('change4', () => {
  expect(change([1], 2)).toStrictEqual(2)
})
