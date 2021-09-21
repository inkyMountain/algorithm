import {maxProfit} from './bestTimeToBuyAndSellStock3'

test('maxProfit0', () => {
  expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toStrictEqual(6)
})

test('maxProfit1', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toStrictEqual(4)
})

test('maxProfit2', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
})

test('maxProfit3', () => {
  expect(maxProfit([1])).toStrictEqual(0)
})
