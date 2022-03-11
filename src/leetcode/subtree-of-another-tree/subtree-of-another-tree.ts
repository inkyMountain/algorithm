class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  let result = false
  function traverse(node: TreeNode | null) {
    if (node === null) {
      return
    }
    const same = isSame(node, subRoot)
    if (same) {
      result = same
    }
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)

  function isSame(node1: TreeNode | null, node2: TreeNode | null) {
    if (node1 === null && node2 === null) {
      return true
    } else if (node1 === null || node2 === null) {
      return false
    } else {
      return (
        node1.val === node2.val &&
        isSame(node1.left, node2.left) &&
        isSame(node1.right, node2.right)
      )
    }
  }
  return result
}
