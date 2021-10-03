import {minDistance} from './deleteOperationForTwoString'

describe('minDistance', () => {
  it('minDistance0', () => {
    expect(minDistance('sea', 'eat')).toStrictEqual(2)
  })

  it('minDistance1', () => {
    expect(minDistance('leetcode', 'etco')).toStrictEqual(4)
  })

  it('minDistance2', () => {
    expect(minDistance('a', 'b')).toStrictEqual(2)
  })
})
