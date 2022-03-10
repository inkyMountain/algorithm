import {exist} from './word-search'

describe('word-search', () => {
  test('word-search', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCB'
      )
    ).toBeFalsy()
  })
})
