// https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
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

export function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  const traverse = (node: TreeNode | null) => {
    if (node === null) {
      return null;
    }

    node.right = traverse(node.right);
    const currentValue = node.val;
    node.val += sum;
    sum += currentValue;
    node.left = traverse(node.left);
    return node;
  };
  return traverse(root);
}
