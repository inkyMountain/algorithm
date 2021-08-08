import {uniqueBinarySearchTree} from './uniqueBinarySearchTree'

test('integerBreak0', () => {
  expect(uniqueBinarySearchTree(3)).toStrictEqual(5)
})

test('integerBreak1', () => {
  expect(uniqueBinarySearchTree(1)).toStrictEqual(1)
})
