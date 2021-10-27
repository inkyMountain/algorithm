// https://leetcode-cn.com/problems/longest-univalue-path/
import TreeNode from '../../dataStructure/TreeNode'

let max = 0
export function longestUnivaluePath(root: TreeNode | null): number {
  max = 0
  maxLengthOf(root)
  return max
};

function maxLengthOf(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  const leftAmount = maxLengthOf(root.left)
  const rightAmount = maxLengthOf(root.right)
  const leftNum = root.left?.val ?? 0
  const rightNum = root.right?.val ?? 0
  if (leftNum === root.val && rightNum === root.val) {
    max = Math.max(max, leftAmount + rightAmount)
    return Math.max(leftAmount, rightAmount) + 1
  } else if(leftNum === root.val) {
    max = Math.max(max, leftAmount)
    return leftAmount + 1
  } else if (rightNum === root.val){
    max = Math.max(max, rightAmount)
    return rightAmount + 1
  } else {
    return 1
  }
}
