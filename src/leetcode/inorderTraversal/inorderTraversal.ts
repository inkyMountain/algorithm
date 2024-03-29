// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/

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
  const stack = [];
  let node = root;
  while (node !== null || stack.length !== 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
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
