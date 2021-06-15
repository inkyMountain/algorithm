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

export function findBottomLeftValue(root: TreeNode | null): number {
  const queue = [root];

  let result;
  while (queue.length > 0) {
    const previousLine = [];
    const size = queue.length;
    let hasPushed = false;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      previousLine.push(node);
      if (node.left) {
        hasPushed = true;
        queue.push(node.left);
      }
      if (node.right) {
        hasPushed = true;
        queue.push(node.right);
      }
    }

    if (!hasPushed) {
      result = previousLine[0].val;
    }
  }
  return result;
}
