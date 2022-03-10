import {countNodes, TreeNode} from './count-complete-tree-nodes'

describe('count-complete-tree-nodes', () => {
  test('count-complete-tree-nodes', () => {
    expect(
      countNodes(
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(4), new TreeNode(5)),
          new TreeNode(3)
        )
      )
    ).toStrictEqual(5)
  })
})
