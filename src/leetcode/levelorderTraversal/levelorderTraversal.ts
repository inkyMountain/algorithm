// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

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

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const queue: TreeNode[] = [root];
  const result = [];
  while (queue.length > 0) {
    const size = queue.length;
    const levelValues = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelValues.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelValues);
  }
  return result;
}
