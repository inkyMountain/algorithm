import TreeNode from '../../dataStructure/TreeNode'
import {rob} from './houseRobber3'

test('rob0', () => {
  expect(
    rob(
      new TreeNode(
        3,
        new TreeNode(2, null, new TreeNode(3)),
        new TreeNode(3, null, new TreeNode(1))
      )
    )
  ).toStrictEqual(7)
})
