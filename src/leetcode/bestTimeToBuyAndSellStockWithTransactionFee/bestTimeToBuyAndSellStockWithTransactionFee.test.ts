import {maxProfit} from './bestTimeToBuyAndSellStockWithTransactionFee'

describe('maxProfitWithTransactionFee', () => {
  it('maxProfit0', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toStrictEqual(8)
  })

  it('maxProfit1', () => {
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toStrictEqual(6)
  })
})
