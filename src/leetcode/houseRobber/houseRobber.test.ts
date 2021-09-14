import {rob} from './houseRobber'

test('rob0', () => {
  expect(rob([1, 2, 3, 1])).toStrictEqual(4)
})

test('rob1', () => {
  expect(rob([2, 7, 9, 3, 1])).toStrictEqual(12)
})

test('rob2', () => {
  expect(rob([1, 2])).toStrictEqual(2)
})

test('rob3', () => {
  expect(rob([1, 3, 1])).toStrictEqual(3)
})
