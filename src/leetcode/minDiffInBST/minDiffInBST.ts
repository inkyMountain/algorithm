// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
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

export function minDiffInBST(root: TreeNode | null): number {
  const values = [];
  traverse(root, values);
  let min = Infinity;
  for (let i = 0; i < values.length - 1; i++) {
    const diff = values[i + 1] - values[i];
    if (diff < min) {
      min = diff;
    }
  }
  return min;
}

const traverse = (node: TreeNode | null, values: number[]) => {
  if (node === null) {
    return;
  }
  traverse(node.left, values);
  values.push(node.val);
  traverse(node.right, values);
};
