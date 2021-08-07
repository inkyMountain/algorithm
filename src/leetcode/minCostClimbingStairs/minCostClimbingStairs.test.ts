import {minCostClimbingStairs} from './minCostClimbingStairs'

test('minCostClimbingStairs0', () => {
  expect(
    minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
  ).toStrictEqual(6)
})

test('minCostClimbingStairs1', () => {
  expect(minCostClimbingStairs([10, 15, 20])).toStrictEqual(15)
})
