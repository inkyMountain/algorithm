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

export function isValidBST(root: TreeNode | null): boolean {
  return helper(root, -Infinity, Infinity);
}

const helper = (node: TreeNode | null, lower: number, upper: number) => {
  if (node === null) {
    return true;
  }
  const isNodeValid = node.val > lower && node.val < upper;
  return (
    isNodeValid &&
    helper(node.left, lower, node.val) &&
    helper(node.right, node.val, upper)
  );
};
