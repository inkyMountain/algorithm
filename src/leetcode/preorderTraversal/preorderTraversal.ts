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
  // use stack to ensure traverse order
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
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
