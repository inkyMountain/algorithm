/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
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
function rob(root: TreeNode | null): number {
  const amountMap = new Map<TreeNode, [number, number]>()

  function dfs(node: TreeNode | null) {
    if (node === null) {
      return
    }
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return Math.max(...amountMap.get(root))
}
// @lc code=end
