import {mySqrt} from './sqrt'

describe('sqrt', () => {
  it('sqrt0', () => {
    expect(mySqrt(4)).toEqual(2)
  })

  it('sqrt1', () => {
    expect(mySqrt(8)).toEqual(2)
  })

  it('sqrt2', () => {
    expect(mySqrt(0)).toEqual(0)
  })
})
