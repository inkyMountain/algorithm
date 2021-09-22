import {maxProfit} from './bestTimeToBuyAndSellStockWithCooldown'

describe('maxProfitWithCooldown', () => {
  it('maxProfit0', () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toStrictEqual(3)
  })

  it('maxProfit1', () => {
    expect(maxProfit([1])).toStrictEqual(0)
  })

  it('maxProfit13', () => {
    expect(maxProfit([1, 2, 4])).toStrictEqual(3)
  })
})
