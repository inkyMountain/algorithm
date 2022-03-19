import {findTargetSumWays} from './targetSum'

test('findTargetSumWays0', () => {
  expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toStrictEqual(5)
})

test('findTargetSumWays1', () => {
  expect(findTargetSumWays([1], 1)).toStrictEqual(1)
})

test('findTargetSumWays2', () => {
  expect(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).toStrictEqual(256)
})
