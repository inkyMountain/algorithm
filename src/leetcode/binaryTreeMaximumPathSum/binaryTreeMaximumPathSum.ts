// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
import TreeNode from '../../dataStructure/TreeNode'

let max = -Infinity

export function maxPathSum(root: TreeNode | null): number {
  max = -Infinity
  maxPathOf(root)
  return max
}

function maxPathOf(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  const left = Math.max(maxPathOf(root.left), 0)
  const right = Math.max(maxPathOf(root.right), 0)
  max = Math.max(max, left + right + root.val)
  return Math.max(left + root.val, right + root.val, root.val)
}
