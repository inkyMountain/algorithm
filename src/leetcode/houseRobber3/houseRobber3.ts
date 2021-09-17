// https://leetcode-cn.com/problems/house-robber-iii/

import TreeNode from '../../dataStructure/TreeNode'

export function rob(root: TreeNode): number {
  // max value which skip the "root" node
  const skip = new Map()
  // max value which DO NOT skip the "root" node
  const nonSkip = new Map()

  const dfs = (node: TreeNode) => {
    if (node === null) {
      return
    }
    dfs(node.right)
    dfs(node.left)
    const leftSkipNum = skip.get(node.left) || 0
    const rightSkipNum = skip.get(node.right) || 0
    const leftNonSkipNum = nonSkip.get(node.left) || 0
    const rightNonSkipNum = nonSkip.get(node.right) || 0

    nonSkip.set(node, leftSkipNum + rightSkipNum + node.val)
    skip.set(
      node,
      Math.max(leftSkipNum, leftNonSkipNum) +
        Math.max(rightSkipNum, rightNonSkipNum)
    )
  }

  dfs(root)

  return Math.max(skip.get(root), nonSkip.get(root))
}
