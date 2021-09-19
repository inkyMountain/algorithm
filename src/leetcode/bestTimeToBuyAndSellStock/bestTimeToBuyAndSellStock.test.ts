import {maxProfit} from './bestTimeToBuyAndSellStock'

test('maxProfit0', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5)
})

test('maxProfit1', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
})
