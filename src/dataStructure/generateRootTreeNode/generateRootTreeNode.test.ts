import TreeNode from '../TreeNode'
import {generateRootTreeNode} from './generateRootTreeNode'

describe('generateRootTreeNode', () => {
  expect(generateRootTreeNode([3, 2, 3, null, 3, null, 1])).toStrictEqual(
    new TreeNode(
      3,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(3, null, new TreeNode(1))
    )
  )
})
