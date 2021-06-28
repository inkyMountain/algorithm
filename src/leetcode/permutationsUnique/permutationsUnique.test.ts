import {permuteUnique} from './permutationsUnique'

test('permuteUnique0', () => {
  const result = permuteUnique([1, 1, 2])
  expect(result).toStrictEqual([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ])
})
