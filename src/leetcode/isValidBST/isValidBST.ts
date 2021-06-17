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
  return helper(root, );
}

const helper = (node: TreeNode | null, lower: number, upper: number) => {
  if (node === null) {
    return true;
  }
  const isRightNodeValid = node.right === null || node.val < node.right.val;
  const isLeftNodeValid = node.left === null || node.val > node.left.val;
  return (
    isRightNodeValid &&
    isLeftNodeValid &&
    helper(node.left) &&
    helper(node.right)
  );
};
