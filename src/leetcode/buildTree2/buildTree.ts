// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

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

export const buildTree = function (preorder: number[], inorder: number[]) {
  let preorderIndex = 0;
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const helper = (inorderLeft: number, inorderRight: number) => {
    if (inorderLeft > inorderRight) {
      return null;
    }
    const center = new TreeNode(preorder[preorderIndex]);
    const centerIndex = map.get(center.val);
    preorderIndex++;
    center.left = helper(inorderLeft, centerIndex - 1);
    center.right = helper(centerIndex + 1, inorderRight);
    return center;
  };
  return helper(0, inorder.length - 1);
};
