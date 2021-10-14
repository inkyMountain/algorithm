import {largestRectangleArea} from './largestRectangleInHistogram'

describe('largestRectangleArea', () => {
  it('largestRectangleArea0', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toStrictEqual(10)
  })

  it('largestRectangleArea1', () => {
    expect(largestRectangleArea([2, 4])).toStrictEqual(4)
  })
})
