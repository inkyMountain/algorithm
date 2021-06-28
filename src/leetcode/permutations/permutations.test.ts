import {permute} from './permutations'

test('permute0', () => {
  const result = permute([1, 2, 3])
  expect(result).toStrictEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ])
})
