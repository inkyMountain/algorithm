import {nextGreaterElements} from './nextGreaterElement2'

describe('nextGreaterElement2', () => {
  it('nextGreaterElement0', () => {
    expect(nextGreaterElements([1, 2, 1])).toStrictEqual([2, -1, 2])
  })

  it('nextGreaterElement1', () => {
    expect(nextGreaterElements([1, 2, 3, 4, 3])).toStrictEqual([2, 3, 4, -1, 4])
  })
})
