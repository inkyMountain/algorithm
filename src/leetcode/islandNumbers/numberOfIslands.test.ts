import {numIslands} from './numberOfIslands'

describe('numberOfIslands', () => {
  it('numberOfIslands0', () => {
    expect(
      numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ])
    ).toStrictEqual(1)
  })
  it('numberOfIslands1', () => {
    expect(
      numIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ])
    ).toStrictEqual(3)
  })
})
