import {lastStoneWeightII} from './lastStoneWeight'

test('lastStoneWeight0', () => {
  expect(lastStoneWeightII([2, 7, 4, 1, 8, 1])).toStrictEqual(1)
})

test('lastStoneWeight1', () => {
  expect(lastStoneWeightII([31, 26, 33, 21, 40])).toStrictEqual(5)
})

test('lastStoneWeight2', () => {
  expect(lastStoneWeightII([1, 2])).toStrictEqual(1)
})
