// https://leetcode-cn.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function traverse(node: TreeNode | null, sum: number, targetSum: number) {
  if (node.left === null && node.right === null) {
    return sum + node.val === targetSum
  }
  return !!(
    (node.left && traverse(node.left, node.val + sum, targetSum))
    || (node.right && traverse(node.right, node.val + sum, targetSum))
  )

}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false
  return traverse(root, 0, targetSum)
};
