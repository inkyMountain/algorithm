// https://leetcode-cn.com/problems/count-complete-tree-nodes/

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

/**
 * time complexity: O((log n)^2)
 * consists of:
 * - depth calculation depends on depth of the tree, so it's O(log n)
 * - binary search: each judgement of existence is O(log n). we do it log n
 * times. the sum is O((log n)^2).
 * => So the final complexity is O((log n)^2) + O(log n) = O((log n)^2)
 *
 * space complexity: O(1)
 * the space we use is several pointers
 */
function exists(depth: number, num: number, root: TreeNode) {
  let bits = 1 << (depth - 1);
  let node = root;

  while (bits > 0) {
    if (bits & num) {
      node = node.right;
    } else {
      node = node.left;
    }
    bits = bits >> 1;
  }

  return node !== null;
}

export function countNodes(root: TreeNode | null): number {
  // exclude the edge case
  if (root === null) {
    return 0;
  }

  // calculate the tree's depth
  let depth = 0;
  let node = root;
  while (node.left !== null) {
    node = node.left;
    depth++;
  }

  // use binary search
  let left = 1 << depth;
  let right = (1 << (depth + 1)) - 1;
  while (left < right) {
    // caution: use Math.floor instead of ceil
    // this should be consistent with the movement of left & right pointer.
    const middle = Math.floor((right - left) / 2) + left;
    if (exists(depth, middle, root)) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }
  return left;
}
