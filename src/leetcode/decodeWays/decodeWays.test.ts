import {numDecodings} from './decodeWays'

describe('decodeWays', () => {
  it('decodeWays0', () => {
    expect(numDecodings('2101')).toStrictEqual(1)
  })

  it('decodeWays1', () => {
    expect(numDecodings('06')).toStrictEqual(0)
  })

  it('decodeWays2', () => {
    expect(numDecodings('0')).toStrictEqual(0)
  })

  it('decodeWays3', () => {
    expect(numDecodings('226')).toStrictEqual(3)
  })

  it('decodeWays4', () => {
    expect(numDecodings('22601')).toStrictEqual(0)
  })

  it('decodeWays5', () => {
    expect(numDecodings('101')).toStrictEqual(1)
  })
})
