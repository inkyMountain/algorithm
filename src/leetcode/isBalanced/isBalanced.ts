// https://leetcode-cn.com/problems/balanced-binary-tree/

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

function heightOf(node: TreeNode | null) {
  if (node === null) {
    return 0;
  }
  const leftHeight = heightOf(node.left);
  const rightHeight = heightOf(node.right);
  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1;
  } else {
    // the max of two end's height should plus 1, cause one node's height
    // should contain itself, not only its children.
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

/**
 * time complexity: O(n)
 * the extreme condition would take n space(if the tree is like a straight link)
 *
 * space complexity: O(n)
 * same as time complexity, cause the main consumption is on traversal stack.
 */
export function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  return heightOf(root) > 0;
}
