import {trap} from './trappingRainWater'

describe('trappingRainWater', () => {
  it('trappingRainWater0', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toStrictEqual(6)
  })

  it('trappingRainWater1', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toStrictEqual(9)
  })

  it('trappingRainWater2', () => {
    expect(trap([4, 2, 3])).toStrictEqual(1)
  })
})
