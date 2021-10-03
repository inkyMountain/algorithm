import {minDistance} from './editDistance'

describe('editDistance', () => {
  it('minDistance0', () => {
    expect(minDistance('horse', 'ros')).toStrictEqual(3)
  })

  it('minDistance1', () => {
    expect(minDistance('intention', 'execution')).toStrictEqual(5)
  })
})
