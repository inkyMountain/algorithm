import {uniquePaths} from './uniquePaths'

test('uniquePaths0', () => {
  expect(uniquePaths(3, 7)).toStrictEqual(28)
})

test('uniquePaths1', () => {
  expect(uniquePaths(3, 2)).toStrictEqual(3)
})

test('uniquePaths2', () => {
  expect(uniquePaths(7, 3)).toStrictEqual(28)
})

test('uniquePaths3', () => {
  expect(uniquePaths(3, 3)).toStrictEqual(6)
})
