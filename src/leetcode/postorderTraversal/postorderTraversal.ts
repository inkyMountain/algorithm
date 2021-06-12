// https://leetcode-cn.com/problems/top-k-frequent-elements/

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

function traversal(node: TreeNode, result: number[]) {
  if (node.left) {
    traversal(node.left, result);
  }
  if (node.right) {
    traversal(node.right, result);
  }
  result.push(node.val);
}

export function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const result = [];
  traversal(root, result);
  return result;
}


