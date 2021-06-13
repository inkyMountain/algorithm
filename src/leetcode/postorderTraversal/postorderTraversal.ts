// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/

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
  const result = [];
  const stack = [];
  let node = root;
  let previous = null;
  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    // if the node has no right node or we have entered the right node, push
    // current node value. cause the right node's value has been pushed.
    if (node.right === null || node.right === previous) {
      result.push(node.val);
      previous = node;
      node = null;
    } else {
      // if the node has right node, push current node back to stack and
      // continue loop with the right node.
      stack.push(node);
      node = node.right;
    }
  }
  return result;
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
