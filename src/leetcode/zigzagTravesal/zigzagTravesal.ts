// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

import TreeNode from '../../dataStructure/TreeNode'

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const current = [root]
  const next = []
  const result = [[root.val]]
  let direction = 'left'
  while (current.length) {
    const layerValues = []
    next.length = 0
    if (direction === 'left') {
      for (let i = current.length - 1; i >= 0; i--) {
        const node = current[i]
        layerValues.push(node.val)
        node.right && next.push(node.right)
        node.left && next.push(node.left)
      }
    } else {
      for (let i = 0; i < current.length; i++) {
        const node = current[i]
        layerValues.push(node.val)
        node.left && next.push(node.left)
        node.right && next.push(node.right)
      }
    }
    result.push(layerValues)
    current.length = 0
    current.push(...next)
  }
  return result
}
