// https://leetcode-cn.com/problems/trim-a-binary-search-tree/
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

export function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  return traverse(root, low, high)
}

const traverse = (node: TreeNode | null, low: number, high: number) => {
  if (node === null) {
    return null;
  }

  if (node.val < low) {
    return traverse(node.right, low, high);
  }
  if (node.val > high) {
    return traverse(node.left, low, high);
  }

  node.left = traverse(node.left, low, high)
  node.right = traverse(node.right, low, high)
  return node;
};
