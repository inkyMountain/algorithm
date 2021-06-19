// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
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

export function findMode(root: TreeNode | null): number[] {
  let result = [];
  let current = null;
  let previous = null;
  let count = 1;
  let maxCount = 0;

  const traverse = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    traverse(node.left);

    previous = current === null ? null : current;
    current = node.val;
    // first count the times current number has appeared
    if (current === previous) {
      count++;
    } else {
      count = 1;
    }
    // if it appears more frequently than previous most-appeared number,
    // push the current number into result.
    // else replace the result array with current number, for the previous
    // result is not the most frequent.
    if (count === maxCount) {
      result.push(current);
    } else if (count > maxCount) {
      maxCount = count;
      result = [current];
    }

    traverse(node.right);
  };
  traverse(root);
  return result;
}
