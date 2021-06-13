// https://leetcode-cn.com/problems/invert-binary-tree/

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

// extra function for convenience of recursion
function check(a: TreeNode | null, b: TreeNode | null) {
  if (a === null && b === null) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  return a.val === b.val && check(a.left, b.right) && check(a.right, b.left);
}

// use level order to traverse binary tree
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  return check(root.left, root.right);
}
