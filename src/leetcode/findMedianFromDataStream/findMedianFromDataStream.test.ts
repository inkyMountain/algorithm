import {MedianFinder} from './findMedianFromDataStream'

const gather = (operations: Array<string>, values: Array<Array<number>>) => {
  const result = []
  const finder = new MedianFinder()
  operations.forEach((operation, index) => {
    switch (operation) {
      case 'MedianFinder': {
        result.push(null)
        break
      }
      case 'addNum': {
        finder.addNum(values[index][0])
        result.push(null)
        break
      }
      case 'findMedian': {
        result.push(finder.findMedian())
        break
      }
    }
  })
  return result
}

describe('MedianFinder', () => {
  it('MedianFinder0', () => {
    expect(
      gather(
        [
          'MedianFinder',
          'addNum',
          'addNum',
          'findMedian',
          'addNum',
          'findMedian',
        ],
        [[], [1], [2], [], [3], []]
      )
    ).toStrictEqual([null, null, null, 1.5, null, 2])
  })
})
