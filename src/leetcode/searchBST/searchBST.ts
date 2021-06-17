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

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root !== null) {
    if (val === root.val) {
      return root
    } else if (val < root.val) {
      root = root.left
    } else if (val > root.val) {
      root = root.right
    }
  }
  return null
};
