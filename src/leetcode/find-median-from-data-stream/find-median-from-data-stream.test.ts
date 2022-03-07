import {MedianFinder} from './find-median-from-data-stream'

describe('MedianFinder', () => {
  test('1', () => {
    const finder = new MedianFinder()
    finder.addNum(0)
    finder.addNum(0)
    expect(finder.findMedian()).toStrictEqual(0)
  })
  test('2', () => {
    const finder = new MedianFinder()
    finder.addNum(1)
    expect(finder.findMedian()).toStrictEqual(1)
    finder.addNum(8)
    expect(finder.findMedian()).toStrictEqual(4.5)
    finder.addNum(3)
    expect(finder.findMedian()).toStrictEqual(3)
  })
})
