import {nextGreaterElement, nextSmallerElement} from './nextGreaterElement'

describe('nextGreaterElement', () => {
  it('nextGreaterElement0', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toStrictEqual([
      -1, 3, -1,
    ])
  })

  it('nextGreaterElement1', () => {
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toStrictEqual([3, -1])
  })
})

describe('nextSmallerElement', () => {
  it('nextSmallerElement0', () => {
    expect(nextSmallerElement([1, 3, 4, 2])).toStrictEqual({
      1: -1,
      3: 2,
      4: 2,
      2: -1,
    })
  })

  it('nextSmallerElement1', () => {
    expect(nextSmallerElement([1, 2, 3, 4])).toStrictEqual({
      1: -1,
      2: -1,
      3: -1,
      4: -1,
    })
  })
})
