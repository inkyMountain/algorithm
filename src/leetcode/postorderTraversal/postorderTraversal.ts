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
export function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  // use stack to ensure traverse order
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result.reverse();
}

// export function postorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   const stack = [root];
//   const result = [];
//
//   while (stack.length > 0) {
//     const node = stack[stack.length - 1];
//     if (!node.left && !node.right) {
//       result.push(node.val);
//       stack.pop();
//     }
//     if (node.right) {
//       stack.push(node.right);
//       node.right = null;
//     }
//     if (node.left) {
//       stack.push(node.left);
//       node.left = null;
//     }
//   }
//   return result;
// }

// traverse by recursion
// function traversal(node: TreeNode, result: number[]) {
//   if (node.left) {
//     traversal(node.left, result);
//   }
//   if (node.right) {
//     traversal(node.right, result);
//   }
//   result.push(node.val);
// }
//
// export function postorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   const result = [];
//   traversal(root, result);
//   return result;
// }
