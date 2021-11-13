// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
import TreeNode from '../../dataStructure/TreeNode'

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }

  const current = [root]
  const next = []
  let direction = 'right'
  const result = []
  while (current.length) {
    const layerValues = []
    next.length = 0
    for (let i = 0; i < current.length; i++) {
      const node = current[i]
      layerValues.push(node.val)
      node.left && next.push(node.left)
      node.right && next.push(node.right)
    }
    result.push(layerValues)
    if (direction === 'left') {
      layerValues.reverse()
    }
    direction = direction  === 'left' ? 'right' : 'left'
    current.length = 0
    current.push(...next)
  }
  return result
}
