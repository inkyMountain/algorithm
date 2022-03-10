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
export function countNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  let level = -1
  const rootRef = root
  while (root) {
    level++
    root = root.left
  }
  const bottomNodeAmount = Math.pow(2, level)
  let left = Math.pow(2, level),
    right = left + bottomNodeAmount - 1,
    lastExist = left

  while (left <= right) {
    const mid = (left + right) >> 1
    if (exist(mid, rootRef, level)) {
      lastExist = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return lastExist
}

function exist(num: number, root: TreeNode, level: number) {
  let bits = 1 << (level - 1)
  for (let i = 0; i < level; i++) {
    root = (bits & num) === 0 ? root.left : root.right
    bits = bits >> 1
  }
  return root !== null
}
