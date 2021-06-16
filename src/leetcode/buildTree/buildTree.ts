// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

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

export const buildTree = function (inorder: number[], postorder: number[]) {
  let postorderIndex;
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const helper = (inorderLeft: number, inorderRight: number) => {
    if (inorderLeft > inorderRight) {
      return null;
    }
    const center = new TreeNode(postorder[postorderIndex]);
    const centerIndex = map.get(center.val);
    postorderIndex--;
    center.right = helper(centerIndex + 1, inorderRight);
    center.left = helper(inorderLeft, centerIndex - 1);
    return center;
  };
  postorderIndex = postorder.length - 1;
  return helper(0, inorder.length - 1);
};
