import {rob} from './houseRobber'

test('rob0', () => {
  expect(rob([1, 2, 3, 1])).toStrictEqual(4)
})

test('rob1', () => {
  expect(rob([2, 7, 9, 3, 1])).toStrictEqual(12)
})
