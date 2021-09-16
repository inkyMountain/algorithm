import {rob} from './houseRobber2'

test('rob0', () => {
  expect(rob([2, 3, 2])).toStrictEqual(3)
})

test('rob1', () => {
  expect(rob([1, 2, 3, 1])).toStrictEqual(4)
})

test('rob2', () => {
  expect(rob([1, 2, 3])).toStrictEqual(3)
})
