import {openLock} from './openLock'

describe('openLock', () => {
  it('openLock0', () => {
    expect(
      openLock(['0201', '0101', '0102', '1212', '2002'], '0202')
    ).toStrictEqual(6)
  })

  it('openLock1', () => {
    expect(openLock(['8888'], '0009')).toStrictEqual(1)
  })

  it('openLock2', () => {
    expect(
      openLock(
        ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
        '8888'
      )
    ).toStrictEqual(-1)
  })

  it('openLock3', () => {
    expect(
      openLock(
        ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
        '0000'
      )
    ).toStrictEqual(0)
  })

  it('openLock4', () => {
    expect(
      openLock(
        ['0000'],
        '8888'
      )
    ).toStrictEqual(-1)
  })
})
