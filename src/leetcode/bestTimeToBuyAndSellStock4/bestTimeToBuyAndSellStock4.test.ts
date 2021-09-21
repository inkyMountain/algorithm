import {maxProfit} from './bestTimeToBuyAndSellStock4'

describe('maxProfit4', () => {
  it('maxProfit0', () => {
    expect(maxProfit(2, [2, 4, 1])).toStrictEqual(2)
  })

  it('maxProfit1', () => {
    expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toStrictEqual(7)
  })

  it('maxProfit2', () => {
    expect(maxProfit(2, [])).toStrictEqual(0)
  })

  it('maxProfit3', () => {
    expect(maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4])).toStrictEqual(6)
  })
})
