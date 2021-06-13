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

// traverse by iteration
export function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node.left && !node.right) {
      result.push(node.val);
    }
    if (node.right || node.left) {
      if (node.right) {
        stack.push(node.right);
        node.right = null;
      }
      stack.push(node)
      if (node.left) {
        stack.push(node.left);
        node.left = null;
      }
    }
  }
  return result;
}

// traverse by recursion
// function traversal(node: TreeNode, result: number[]) {
//   if (node.left) {
//     traversal(node.left, result);
//   }
//   result.push(node.val);
//   if (node.right) {
//     traversal(node.right, result);
//   }
// }
//
// export function inorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   const result = [];
//   traversal(root, result);
//   return result;
// }
