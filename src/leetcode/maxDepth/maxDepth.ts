// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/submissions/

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

export function traverse(node: TreeNode | null): number {
  if (node === null) return 0;

  const queue = [node];
  let depth = 0;
  while (queue.length > 0) {
    depth++;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return depth;
}

export function maxDepth(root: TreeNode | null): number {
  return traverse(root);
}
