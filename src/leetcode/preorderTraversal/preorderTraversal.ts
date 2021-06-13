// https://leetcode-cn.com/problems/top-k-frequent-elements/

/**
 * Definition for a binary tree node.
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Traverse by iteration
export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack = [];
  const result = [];
  let node = root;
  while (stack.length > 0 || node !== null) {
    while (node !== null) {
      // expand the binary tree to bottom left. preorder traversal requires
      // center first, left second, so we push value during expanding.
      result.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  return result;
}

// Traverse recursively
// function traversal(node: TreeNode, result: number[]) {
//   result.push(node.val);
//   if (node.left) {
//     traversal(node.left, result);
//   }
//   if (node.right) {
//     traversal(node.right, result);
//   }
// }
//
// export function preorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   const result = [];
//   traversal(root, result);
//   return result;
// }
