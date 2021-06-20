// https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
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

export function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (root === null) {
    return new TreeNode(val);
  }
  traverse(root, val);
  return root;
}

const traverse = (node: TreeNode | null, val: number) => {
  if (node === null) {
    return new TreeNode(val);
  }
  if (val > node.val) {
    node.right = traverse(node.right, val);
  }
  if (val < node.val) {
    node.left = traverse(node.left, val);
  }
  return node;
};
