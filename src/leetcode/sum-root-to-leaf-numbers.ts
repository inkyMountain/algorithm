/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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
function sumNumbers(root: TreeNode | null): number {
  let sum = 0
  const onReachLeaf = (num: number) => {
    sum += num
  }
  dfs(root, 0, onReachLeaf)
  return sum
}

function dfs(
  node: TreeNode | null,
  num: number,
  onReachLeaf: (num: number) => void
) {
  if (node === null) {
    return
  }
  // process current node
  // if current node has no child, pass it to leaf handler.
  num += node.val
  if (node.left === null && node.right === null) {
    onReachLeaf(num)
  }

  // prepare for children
  const nextNum = num * 10
  dfs(node.left, nextNum, onReachLeaf)
  dfs(node.right, nextNum, onReachLeaf)
}
// @lc code=end

// console.log(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3))))
console.log(
  sumNumbers(
    new TreeNode(
      4,
      new TreeNode(9, new TreeNode(5), new TreeNode(1)),
      new TreeNode(0)
    )
  )
)
/**
 *    4
 *  9  0
 * 5 1
 *
 * 495
 * 491
 * 40
 *
 */
