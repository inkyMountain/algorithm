import {minPathSum} from './minimumPathSum'

describe('minimumPathSum', () => {
  it('minimumPathSum0', () => {
    expect(
      minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ])
    ).toStrictEqual(7)
  })

  it('minimumPathSum1', () => {
    expect(
      minPathSum([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toStrictEqual(12)
  })

  it('minimumPathSum2', () => {
    expect(
      minPathSum([
        [1, 2],
        [1, 1],
      ])
    ).toStrictEqual(3)
  })
})
