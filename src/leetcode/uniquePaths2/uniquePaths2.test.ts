import {uniquePathsWithObstacles} from './uniquePaths2'

test('uniquePaths0', () => {
  expect(
    uniquePathsWithObstacles([
      [0, 1],
      [0, 0],
    ])
  ).toStrictEqual(1)
})

test('uniquePaths1', () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toStrictEqual(2)
})

test('uniquePaths2', () => {
  expect(uniquePathsWithObstacles([[0, 1]])).toStrictEqual(0)
})

test('uniquePaths3', () => {
  expect(uniquePathsWithObstacles([[1]])).toStrictEqual(0)
})

test('uniquePaths4', () => {
  expect(uniquePathsWithObstacles([[1, 0]])).toStrictEqual(0)
})

test('uniquePaths5', () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ])
  ).toStrictEqual(7)
})
