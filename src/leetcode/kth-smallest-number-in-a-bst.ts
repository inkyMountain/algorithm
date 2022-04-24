/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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
function kthSmallest(root: TreeNode | null, k: number): number {
  const nums: number[] = []
  dfs(root, (node) => {
    nums.push(node.val)
  })

  return nums[k - 1]
}

function dfs(node: TreeNode | null, handler: (node: TreeNode) => void) {
  if (node === null) {
    return
  }
  dfs(node.left, handler)
  handler(node)
  dfs(node.right, handler)
}
// @lc code=end
