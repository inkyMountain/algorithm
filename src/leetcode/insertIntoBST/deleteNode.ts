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

export function deleteNode(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  return traverse(root, val);
}

const traverse = (node: TreeNode | null, val: number) => {
  if (node === null) {
    return null;
  }
  if (node.val === val) {
    if (node.left === null && node.right === null) {
      return null;
    }
    if (node.left === null && node.right !== null) {
      return node.right;
    }
    if (node.left !== null && node.right === null) {
      return node.left;
    }
    if (node.left !== null && node.right !== null) {
      let mostLeftNode = node.right;
      while (mostLeftNode.left !== null) {
        mostLeftNode = mostLeftNode.left;
      }
      mostLeftNode.left = node.left;
      return node.right;
    }
  }

  if (node.val > val) {
    node.left = traverse(node.left, val);
  }
  if (node.val < val) {
    node.right = traverse(node.right, val);
  }
  return node;
};
