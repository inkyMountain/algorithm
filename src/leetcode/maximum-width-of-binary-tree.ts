/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
// @lc code=start

interface QueueElement {
  node: TreeNode
  index: bigint
}

function widthOfBinaryTree(root: TreeNode | null): bigint {
  if (root === null) {
    return 0n
  }
  const queue: QueueElement[] = [{node: root, index: 0n}]
  let maxWidth: bigint = 1n

  while (queue.length > 0) {
    const length = queue.length
    const newWidth = queue[queue.length - 1].index - queue[0].index + 1n
    if (maxWidth < newWidth) {
      maxWidth = newWidth
    }
    for (let i = 0; i < length; i++) {
      const top = queue.shift()
      if (top.node.left) {
        queue.push({
          node: top.node.left,
          index: 2n * top.index + 1n,
        })
      }
      if (top.node.right) {
        queue.push({
          node: top.node.right,
          index: 2n * top.index + 2n,
        })
      }
    }
  }
  return maxWidth
}
// @lc code=end

describe('maximum-width-of-binary-tree', () => {
  test('1', () => {
    expect(
      widthOfBinaryTree(
        new TreeNode(
          1,
          new TreeNode(3, new TreeNode(5, new TreeNode(6))),
          new TreeNode(2, null, new TreeNode(9, new TreeNode(7)))
        )
      )
    ).toStrictEqual(7n)
  })
})
