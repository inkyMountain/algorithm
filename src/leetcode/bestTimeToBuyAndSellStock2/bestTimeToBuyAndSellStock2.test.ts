import {maxProfit} from './bestTimeToBuyAndSellStock2'

test('maxProfit0', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(7)
})

test('maxProfit0', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toStrictEqual(4)
})

test('maxProfit1', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
})
