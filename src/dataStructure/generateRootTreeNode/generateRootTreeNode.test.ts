import TreeNode from '../TreeNode'
import {generateRootTreeNode} from './generateRootTreeNode'

describe('generateRootTreeNode0', () => {
  it('', () => {
    const node = generateRootTreeNode([3, 2, 3, null, 3, null, 1])
    const expected = new TreeNode(
      3,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(3, null, new TreeNode(1))
    )
    expect(node).toStrictEqual(expected)
  })

  it('', () => {
    expect(generateRootTreeNode(null)).toStrictEqual(null)
  })

  it('', () => {
    expect(generateRootTreeNode([1])).toStrictEqual(new TreeNode(1))
  })

  it('', () => {
    expect(generateRootTreeNode([1, null, 3])).toStrictEqual(
      new TreeNode(1, null, new TreeNode(3))
    )
  })
})
