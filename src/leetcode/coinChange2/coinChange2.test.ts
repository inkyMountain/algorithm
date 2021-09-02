import {change} from './coinChange2'

test('change0', () => {
  expect(change(5, [1, 2, 5])).toStrictEqual(4)
})

test('change1', () => {
  expect(change(3, [2])).toStrictEqual(0)
})

test('change2', () => {
  expect(change(10, [10])).toStrictEqual(1)
})
