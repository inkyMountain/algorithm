// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) {
    return null;
  }
  if (root.val <= p.val && root.val >= q.val) {
    return root;
  }
  if (root.val >= p.val && root.val <= q.val) {
    return root;
  }
  return (
    lowestCommonAncestor(root.left, p, q) ||
    lowestCommonAncestor(root.right, p, q)
  );
}
